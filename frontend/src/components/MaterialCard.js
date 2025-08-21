import React from 'react';
import { Eye, Star } from 'lucide-react';

const MaterialCard = ({ material, favoriten, togglefavoriten, onDetailsClick }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group h-full flex flex-col">
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
                        
      <button 
        onClick={() => onDetailsClick(material)} 
        className="w-full bg-indigo-50 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors font-medium flex items-center justify-center space-x-2 mt-auto"
      >
        <Eye size={16} />
        <span>Details anzeigen</span>
      </button>
    </div>
  );
};

export default MaterialCard;
