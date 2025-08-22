import useMaterials from '../hooks/useMaterials';
import useFavorites from '../hooks/useFavorites';
import { useState } from 'react';
import Header from '../layout/header';
import Searchbar from '../ui/searchbar';
import Adminpanel from '../admin/adminpanel';
import Materialview from './materialview';
import LoadingSpinner from '../ui/LoadingSpinner';
import {Settings} from 'lucide-react';

const Materialpage = () => {
    const { materials, loading } = useMaterials();
    const { togglefavoriten, favoriten } = useFavorites();
    const [searchbar, setSearchbar] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Alle');
    const [viewMode, setViewMode] = useState('grid');
    const [adminpanel, setAdminpanel] = useState(false);
    
    const categories = ['Alle', ...new Set((materials || []).map(material => material.category).filter(Boolean))]
      
    const filteredMaterialien = materials.filter(material => {
          const matchesSearch = material.name.toLowerCase().includes(searchbar.toLowerCase());
          const matchesCategory = selectedCategory === 'Alle' || material.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });
      
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <Header />
      
        <div className="max-w-8xl mx-auto p-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Materialien</h2>
                      <p className="text-gray-600">{filteredMaterialien.length} Materialien gefunden</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => setAdminpanel(true)}
                        className="bg-red-600 border border-gray-300 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                        <Settings size={18} />
                        <span>Admin</span>
                      </button>
                    </div>
                    {adminpanel && (
                      <Adminpanel onClose={() => setAdminpanel(false)}/>
                    )}
                  </div>
      
                  <Searchbar searchbar={searchbar} setSearchbar={setSearchbar} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} viewMode={viewMode} setViewMode={setViewMode} />
      
        {loading && (<LoadingSpinner />)}  
              
        <Materialview 
          filteredMaterialien={filteredMaterialien}
          togglefavoriten={togglefavoriten}
          favoriten={favoriten}
          viewMode={viewMode}
        />
      </div>
    </div>
  </div>
  );
}

export default Materialpage