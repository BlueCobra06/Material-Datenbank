
import { Star } from 'lucide-react';

const MaterialList = ({filteredMaterialien, togglefavoriten, favoriten, setSelectedMaterial, setDetails}) => {
    return (
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
    );
};

export default MaterialList;