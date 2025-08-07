import { useState, useEffect } from 'react';

function App() {
  const [materialien, setMaterialien] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/materials')
      .then(response => response.json())
      .then(data => {
        console.log('API Antwort:', data);
        setMaterialien(data);
      })
      .catch(error => console.error(error));
  }, []);

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
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Materialien</h2>
        
        {materialien.length === 0 && (
          <p className="text-gray-600">Keine Materialien gefunden.</p>
        )}
        
        {materialien.length > 0 && (
          <ul>
            {materialien.map(material => (
              <li key={material.id || Math.random()} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="text-gray-900">{material.name || 'Unbekanntes Material'}</span>
              </li>
            ))}
          </ul>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;