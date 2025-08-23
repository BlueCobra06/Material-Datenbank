import { Star, Eye, Shield, Beaker, Layers, Gem, TreePine, Hammer, Package } from "lucide-react";

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

const MaterialGrid = ({filteredMaterialien, togglefavoriten, favoriten, setSelectedMaterial, setDetails}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterialien.map(material => (
            <div key={material.id || Math.random()} 
                 className="relative bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group h-full flex flex-col">
            <div className={`absolute bg-gray-200 h-2 w-full mb-2 bg-gradient-to-br ${getGradient(material.category)} rounded-t-xl -my-6 -mx-6`}></div>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className={`bg-gradient-to-br ${getGradient(material.category)} rounded-full mr-3 flex items-center justify-center text-white p-3 rounded-xl`}
                        >{getMaterialIcon(material.category)}</div>
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
                    <span className={`inline-block bg-gradient-to-br ${getGradient(material.category)} text-sm px-3 py-1 rounded-full mb-3 text-white opacity-60`}>
                        {material.category}
                    </span>
                )}
        
                {material.description && (
                    <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                )}
            </div>

            <div>
                {material.tensileStrength && (
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 text-sm">Festigkeit</span>
                    <div className="flex-1 ml-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className={`h-full bg-blue-600 rounded-full transition-all duration-1000 group-hover:scale-x-110`}
                            style={{width: `${Math.min(material.tensileStrength / 10, 100)}%`}}
                        ></div>
                    </div>
                </div>
                )}

                {material.elasticModulus && (
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 text-sm">Elastizitätsmodul</span>
                    <div className="flex-1 ml-3 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                            className={`h-full bg-green-600 rounded-full transition-all duration-1000 group-hover:scale-x-110`}
                            style={{width: `${Math.min(material.elasticModulus / 10, 100)}%`}}
                        ></div>
                    </div>
                </div>
                )}
            </div>

            <div className="bg-gray-200 h-0.5 w-full mb-2"></div>
                          
            <div className="flex items-center justify-between"> 
                <span className="text-black text-lg font-bold">{material.price}</span>             
                    <button onClick={() => {
                        setSelectedMaterial(material); setDetails(true);}} 
                        className={`inline-flex items-center bg-gradient-to-br ${getGradient(material.category)} text-white py-1 px-4 rounded-xl hover:bg-gradient-to-br ${getGradient(material.category)} transition-colors font-medium space-x-2 ml-auto`}
                        >
                        <Eye size={16} />
                        <span>Details</span>
                    </button>
            </div>
        </div>
        ))}
    </div>
    );
}

export default MaterialGrid;
