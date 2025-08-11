import { useState, useEffect } from 'react';
import { Search, Package, Plus, Download, Eye, Filter, Star, Grid, List, Settings, X, Lock } from 'lucide-react';

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
      <nav className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl px-4 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Materialdatenbank</span>      
            </div>
          </div>
        </div>
      </nav>

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
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white p-6 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-auto">
                    <div className="flex justify-between items-center mb-6"> 
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                        <Settings className="text-red-600"></Settings>
                        <span>Admin Panel</span>
                        </h2>
                        <button
                            onClick={() => setAdminpanel(false)}
                            className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors" 
                          >
                            <X size={20} />
                          </button>
                    </div>
                    <div className="text-center">
                      <Lock className="mx-auto w-12 h-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold mb-4">Passwort</h3>
                      <input type="password" 
                              placeholder="Passwort" 
                              className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                    <button onClick={() => setAdminpanel(false)} 
                            className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                        Anmelden
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterialien.map(material => (
                <div key={material.id || Math.random()} 
                     className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full mr-3"></div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {material.name || 'Unbekanntes Material'}
                      </h3>
                    </div>
                    <button
                      onClick={() => togglefavoriten(material.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        favoriten.has(material.id) 
                          ? 'text-yellow-500 bg-yellow-50' 
                          : 'text-gray-400 hover:text-yellow-500 hover:bg-yellow-50'
                      }`}
                    >
                      <Star size={18} fill={favoriten.has(material.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  
                  <div className="flex-grow">
                  {material.category && ( 
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full mb-3">
                      {material.category}
                    </span>
                  )}
                  
                  {material.description && (
                    <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  )}
                  </div>
                                    
                  <button onClick={() => {
                    setSelectedMaterial(material); setDetails(true);}} 
                    className="w-full bg-indigo-50 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors font-medium flex items-center justify-center space-x-2 mt-auto">
                    <Eye size={16} />
                    <span>Details anzeigen</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {filteredMaterialien.length > 0 && viewMode === 'list' && (
            <div className="space-y-3">
              {filteredMaterialien.map(material => (
                <div key={material.id || Math.random()} 
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{material.name || 'Unbekanntes Material'}</h3>
                      <span className="text-sm text-gray-500">{material.category || 'Unbekannte Kategorie'}</span>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => togglefavoriten(material.id)}
                      className={`p-4 text-yellow-400 rounded transition-all hover:bg-yellow-100 hover:shadow-md duration-200`}
                    >
                      <Star size={16} fill={favoriten.has(material.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button onClick={() => {
                        setSelectedMaterial(material); setDetails(true);}} 
                        className="px-4 p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg text-white ml-2 font-medium transition-all duration-200">
                        Details anzeigen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {details && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-1/2 max-h-[80vh] overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl text-white font-bold mb-2">{selectedMaterial.name}</h2>
                  <span className="inline-block px-4 py-2 rounded-full text-sm bg-white/20 text-white font-medium backdrop-blur-sm">{selectedMaterial.category}</span>
                </div>
                <button className="text-white p-2 hover:bg-white/20 rounded-xl transition-all duration-300" 
                  onClick={() => setDetails(false)}>
                  <X size={35} />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 p-6">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-1 h-8 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold">Eigenschaften</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold">Dichte</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.density}</p>
                </div>     
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold">Zugfestigkeit</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.tensileStrength}</p>
                </div>   
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold">Elastizitaetsmodul</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.elasticModulus}</p>
                </div>   
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold">Preis</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.price}</p>
                </div>         
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-b from-green-500 to-teal-500 w-1 h-8 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-800">Anwendungen</h2>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
                <ul className="space-y-3">
                {selectedMaterial?.applications ? 
                  selectedMaterial.applications.split(', ').map((anwendung, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mr-4"></div>
                      <span>{anwendung.trim()}</span>
                    </li>
                  )) : (
                    <li className="text-gray-500">Keine Anwendungen verfügbar</li>
                  )
                }
                </ul>
              </div>
            </div>         
          </div>
        </div>
      )}
    </div>
  );
}
export default App;