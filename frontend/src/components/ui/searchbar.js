import React from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';

const Searchbar = ({searchbar, setSearchbar, selectedCategory, setSelectedCategory, categories, viewMode, setViewMode}) => {
    return (
        <div className="bg-gray-50 p-4 rounded-xl mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Material suchen..."
              value={searchbar}
          onChange={(e) => setSearchbar(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex bg-gray-200 rounded-lg p-1">
            <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-600'
                }`}
              >
                <List size={18} />
              </button>
            </div>                 
          </div>
        </div>
      </div>
    )
};

export default Searchbar;
