import { useState } from 'react';

function App() {
  const [suchbegriff, setSuchbegriff] = useState('');

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Materialdatenbank</h1>
      
      <div className="mb-8">
        <input
          type="text"
          placeholder="Material suchen..."
          value={suchbegriff}
          onChange={(e) => setSuchbegriff(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>
      
      <div className="text-gray-600 text-sm">
        {suchbegriff && `Suche nach: "${suchbegriff}"`}
      </div>
    </div>
  );
}

export default App;
