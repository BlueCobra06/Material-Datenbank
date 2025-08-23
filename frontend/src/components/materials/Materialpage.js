import useMaterials from '../hooks/useMaterials';
import useFavorites from '../hooks/useFavorites';
import { useState, useEffect } from 'react';
import Header from '../layout/header';
import Searchbar from '../ui/searchbar';
import Materialview from './materialview';
import LoadingSpinner from '../ui/LoadingSpinner';
import Adminpanel from '../admin/adminpanel';

const Materialpage = () => {
    const { materials, loading } = useMaterials();
    const { togglefavoriten, favoriten } = useFavorites();
    const [searchbar, setSearchbar] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Alle');
    const [viewMode, setViewMode] = useState('grid');
    const [showAdminpanel, setShowAdminpanel] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const handleLogin = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        setShowAdminpanel(true);
    };

    const categories = ['Alle', ...new Set((materials || []).map(material => material.category).filter(Boolean))]
      
    const filteredMaterialien = materials.filter(material => {
          const matchesSearch = material.name.toLowerCase().includes(searchbar.toLowerCase());
          const matchesCategory = selectedCategory === 'Alle' || material.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });
      
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
            <Header />
      
            <div className="max-w-8xl p-8">
                <div className="p-2">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Materialien</h2>
                            <p className="text-gray-600">{filteredMaterialien.length} Materialien gefunden</p>
                        </div>
                        {isAuthenticated && (
                            <button
                                onClick={() => setShowAdminpanel(true)}
                                className="bg-red-600 border border-gray-300 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                            >
                                <span>Admin Panel</span>
                            </button>
                        )}
                        
                    </div>
            </div>
            <Searchbar searchbar={searchbar} setSearchbar={setSearchbar} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} viewMode={viewMode} setViewMode={setViewMode} />
      
            {loading && (<LoadingSpinner />)}  
            
            {showAdminpanel && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white p-6 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-auto">
                        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
                        <p>Admin.</p>
                        <button onClick={() => setShowAdminpanel(false)} className="mt-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Schließen</button>
                    </div>
                </div>
            )}
            
            <Materialview 
                filteredMaterialien={filteredMaterialien}
                togglefavoriten={togglefavoriten}
                favoriten={favoriten}
                viewMode={viewMode}
            />
          </div>
        </div>
  );
}

export default Materialpage