import { useState, useEffect } from 'react';
import { Search, Package, Filter, Grid, List, Settings, Star, Eye, X } from 'lucide-react';
import Header from './components/layout/header';
import Adminpanel from './components/admin/adminpanel'
import MaterialList from './components/materials/materiallist'
import MaterialGrid from './components/materials/materialgrid'
import MaterialCard from './components/materials/materialcard'
import Searchbar from './components/ui/searchbar'

function App() {
  const [materialien, setMaterialien] = useState([]);
  const [searchbar, setSearchbar] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [viewMode, setViewMode] = useState('grid');
  const [adminpanel, setAdminpanel] = useState(false);
  const [details, setDetails] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8080/api/materials')
      .then(response => response.json())
      .then(data => {
        console.log('API Antwort:', data);
        setMaterialien(data);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const categories = ['Alle', ...new Set((materialien || []).map(material => material.category).filter(Boolean))]

  const filteredMaterialien = materialien.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchbar.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const togglefavoriten = (id) => {
    const newfavoriten = new Set(favoriten);
    if (newfavoriten.has(id)) {
      newfavoriten.delete(id);
    } else {
      newfavoriten.add(id);
    }
    setFavoriten(newfavoriten);
    localStorage.setItem('favoriten', JSON.stringify(Array.from(newfavoriten)));
  }

  const [favoriten, setFavoriten] = useState(() => {
    const saved = localStorage.getItem('favoriten');
    return saved ? new Set(JSON.parse(saved)) : new Set();
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

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
            <span>Materialien werden geladen...</span>
          </div>
        )}  
        
        {filteredMaterialien.length === 0 && searchbar === '' && selectedCategory === 'Alle' && (
          <div className="text-center py-8">
            <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-600">Keine Materialien gefunden.</p>
          </div>
        )} 
        {filteredMaterialien.length === 0 && (searchbar !== '' || selectedCategory !== 'Alle') && (
          <div className="text-center py-8">
            <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-600">Keine Materialien gefunden für diesen Filter gefunden</p> 
          </div>
        )}
        
        {filteredMaterialien.length > 0 && viewMode === 'grid' && (
          <MaterialGrid filteredMaterialien={filteredMaterialien} 
                          togglefavoriten={togglefavoriten} 
                          favoriten={favoriten} 
                          setSelectedMaterial={setSelectedMaterial} 
                          setDetails={setDetails} />
          )}

          {filteredMaterialien.length > 0 && viewMode === 'list' && (
            <MaterialList filteredMaterialien={filteredMaterialien} 
                          togglefavoriten={togglefavoriten} 
                          favoriten={favoriten} 
                          setSelectedMaterial={setSelectedMaterial} 
                          setDetails={setDetails} />
                          

          )}


      {details && (
        <MaterialCard selectedMaterial={selectedMaterial} setDetails={setDetails} />
      )}
      </div>
    </div>
  </div>
  );
}
export default App;