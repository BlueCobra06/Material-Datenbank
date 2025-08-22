import { Shield, Beaker, Layers, Gem, TreePine, Hammer, Package, Star, Eye } from 'lucide-react';

const getGradient = (category) => {
  switch(category) {
      case 'Metall':
          return 'from-slate-600 via-gray-500 to-zinc-400';
      case 'Kunststoff':
          return 'from-purple-600 via-pink-500 to-rose-400';
      case 'Verbundwerkstoff':
          return 'from-blue-600 via-cyan-500 to-teal-400';
      case 'Keramik':
          return 'from-orange-600 via-amber-500 to-yellow-400';
      case 'Holz':
          return 'from-green-600 via-emerald-500 to-teal-400';
      case 'Baustoff':
          return 'from-stone-600 via-neutral-500 to-gray-400';    
      case 'Baumaterial':
          return 'from-brown-600 via-amber-700 to-orange-600';                    
      default:
          return 'from-indigo-600 via-purple-600 to-pink-500';
  }
}

const getMaterialIcon = (category) => {
  switch(category) {
      case 'Metall':
          return <Shield className="w-6 h-6" />;
      case 'Kunststoff':
          return <Beaker className="w-6 h-6" />;
      case 'Verbundwerkstoff':
          return <Layers className="w-6 h-6" />;
      case 'Keramik':
          return <Gem className="w-6 h-6" />;
      case 'Holz':
          return <TreePine className="w-6 h-6" />;
      case 'Baustoff':
          return <Hammer className="w-6 h-6" />;    
      case 'Baumaterial':
          return <Package className="w-6 h-6" />;                    
      default:
          return <Star className="w-6 h-6" />;
  }
}

const MaterialList = ({filteredMaterialien, togglefavoriten, favoriten, setSelectedMaterial, setDetails}) => {
    return (
        <div className="space-y-3">
        {filteredMaterialien.map(material => (
          <div key={material.id || Math.random()} 
          className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`bg-gradient-to-br ${getGradient(material.category)} rounded-xl text-white p-2`}>{getMaterialIcon(material.category)}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{material.name || 'Unbekanntes Material'}</h3>
                <div>
                  <span className={`text-sm text-white font-semibold bg-gradient-to-br ${getGradient(material.category)} px-2 py-1 rounded-xl opacity-75`}>{material.category || 'Unbekannte Kategorie'}</span>
                  <span className="text-sm text-white-600 ml-3">{material.description || 'Keine Beschreibung vorhanden'}</span>
                </div>
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
                        className={`inline-flex items-center bg-gradient-to-br ${getGradient(material.category)} text-white py-2 px-4 rounded-xl hover:bg-gradient-to-br ${getGradient(material.category)} transition-colors font-medium space-x-2 ml-auto`}
                        >
                        <Eye size={16} />
                        <span>Details</span>
                    </button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default MaterialList;