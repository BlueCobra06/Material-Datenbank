import { useState, useEffect } from 'react';
import { Search, Package } from 'lucide-react';

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
          <div className='flex justify-between items-center mb-4'>
            <h2 className="text-2xl font-bold text-gray-900">Materialien</h2>
            <span className="text-gray-600">{filteredMaterialien.length} Materialien gefunden</span>
          </div>

          
          <div className='mb-6 relative'>
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input type="text" 
                    placeholder="Material suchen..." 
                    value={searchbar} 
                    onChange={(e) => setSearchbar(e.target.value)}
                    className = "w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring2 focus:ring-indigo-500 focus:border-transparent shadow-sm"  
                    ></input>
          </div>
        
        {searchbar === '' && (
          <div className="text-center py-8">
            <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-600">Keine Materialien gefunden.</p>
          </div>
        )} 
        {filteredMaterialien.length === 0 && searchbar !== '' && (
          <div className="text-center py-8">
            <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-600">Keine Materialien gefunden für "{searchbar}" gefunden.</p> 
          </div>
        )}
        
        {filteredMaterialien.length > 0 && searchbar.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMaterialien.map(material => (
              <div key={material.id || Math.random()} 
                   className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full mr-3"></div>
                  <h3 className="font-semibold text-gray-900">{material.name || 'Unbekanntes Material'}</h3>
                </div>

                {material.category && (
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded-full mb-2">{material.category}
                  </span>
                )}

                {material.description && (
                  <p className="text-gray-600 text-sm">{material.description}</p>
                )}
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