import { useState, useEffect } from 'react';
import { Search, Package, Plus, Download, Eye } from 'lucide-react';

function App() {
  const [materialien, setMaterialien] = useState([]);
  const [searchbar, setSearchbar] = useState('');
  

  useEffect(() => {
    fetch('http://localhost:8080/api/materials')
      .then(response => response.json())
      .then(data => {
        console.log('API Antwort:', data);
        setMaterialien(data);
      })
      .catch(error => console.error(error));
  }, []);

  const filteredMaterialien = materialien.filter(material =>
    material.name.toLowerCase().includes(searchbar.toLowerCase())
  );

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
            <div className="flex items-center space-x-4 mr-4">
              <a href="#" className="text-indigo-600 text-2xl px-2 hover:text-indigo-800 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-600 text-2xl px-2 hover:text-indigo-800 font-medium transition-colors">Dashboard</a>
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
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                  <Plus size={18} />
                  <span>Hinzufügen</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center space-x-2">
                  <Download size={18} />
                  <span>Export</span>
                </button>
              </div>
            </div>

          
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Material suchen..."
              value={searchbar}
              onChange={(e) => setSearchbar(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            />
          </div>
        
        {searchbar.length == 0 && (
          <div className="text-center py-8">
            <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-600">Keine Materialien gefunden.</p>
          </div>
        )} 
        {filteredMaterialien.length === 0 && searchbar.length > 0 && (
          <div className="text-center py-8">
            <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-600">Keine Materialien gefunden für "{searchbar}" gefunden.</p> 
          </div>
        )}
        
        {filteredMaterialien.length > 0 && searchbar.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterialien.map(material => (
                <div key={material.id || Math.random()} 
                     className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full mr-3"></div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {material.name || 'Unbekanntes Material'}
                      </h3>
                    </div>
                  </div>
                  
                  {material.category && (
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full mb-3">
                      {material.category}
                    </span>
                  )}
                  
                  {material.description && (
                    <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  )}
                  
                  <div className="space-y-2 text-sm mb-4">
                    {material.density && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Dichte:</span>
                        <span className="font-medium">{material.density}</span>
                      </div>
                    )}
                    {material.strength && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Festigkeit:</span>
                        <span className="font-medium">{material.strength}</span>
                      </div>
                    )}
                    {material.temperature && (
                      <div className="flex justify-between">
                        <span className="text-gray-500">Max. Temp.:</span>
                        <span className="font-medium">{material.temperature}</span>
                      </div>
                    )}
                  </div>
                  
                  <button className="w-full bg-indigo-50 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors font-medium flex items-center justify-center space-x-2">
                    <Eye size={16} />
                    <span>Details anzeigen</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;