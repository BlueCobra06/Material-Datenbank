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
    <div className="min-h-screen">
      <nav className="shadow-md">
        <div className="max-w-8xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl px-4 font-bold text-white">Materialdatenbank</span>      
            </div>
            <div className="flex items-center space-x-4 mr-4">
              <a href="#" className="text-white text-2xl px-2 hover:text-blue-500 font-medium transition-colors">Home</a>
              <a href="#" className="text-white text-2xl px-2 hover:text-blue-500 font-medium transition-colors">Dashboard</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-8xl mx-auto p-8 text-white">
        <h2 className="text-2xl font-bold mb-4 text-white">Materialien</h2>
        
        {materialien.length === 0 && (
          <p className="text-white">Keine Materialien gefunden.</p>
        )}
        
        {materialien.length > 0 && (
          <ul>
            {materialien.map(material => (
              <li key={material.id || Math.random()}>
                {material.name || 'Unbekanntes Material'}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;