import { useState } from 'react';

function App() {
  const [suchbegriff, setSuchbegriff] = useState('');

  return (
    <div className="min-h-screen">
      <nav className="shadow-md">
      <div className="max-w-8xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold text-white">Materialdatenbank</span>      
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white text-2xl hover:text-blue-500 font-medium transition-colors">Home</a>
            <a href="#" className="text-white text-2xl hover:text-blue-500 font-medium transition-colors">Dashboard</a>
          </div>
        </div>
      </div>
    </nav>

    <div className="max-w-8xl mx-auto p-8">
      
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Material suchen..."
          value={suchbegriff}
          onChange={(e) => setSuchbegriff(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>
      
      <div className="text-gray-600 text-sm">
        {suchbegriff && `Suche nach: "${suchbegriff}"`}
      </div>
    </div>
  </div>
);
}

export default App;
