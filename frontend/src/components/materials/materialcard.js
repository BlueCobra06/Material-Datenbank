import { X } from "lucide-react";

const MaterialCard = ({selectedMaterial, setDetails}) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-1/2 max-h-[80vh] overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-t-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-3xl text-white font-bold mb-2">{selectedMaterial.name}</h2>
                  <span className="inline-block px-4 py-2 rounded-full text-sm bg-white/20 text-white font-medium backdrop-blur-sm">{selectedMaterial.category}</span>
                </div>
                <button className="text-white p-2 hover:bg-white/20 rounded-xl transition-all duration-300" 
                  onClick={() => setDetails(false)}>
                  <X size={35} />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 p-6">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-1 h-8 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold">Eigenschaften</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold">Dichte</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.density}</p>
                </div>     
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold">Zugfestigkeit</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.tensileStrength}</p>
                </div>   
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-4"></div>
                    <h3 className="text-lg font-semibold">Elastizitaetsmodul</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.elasticModulus}</p>
                </div>   
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-b from-indigo-600 to-purple-600 w-3 h-3 rounded-full mr-3"></div>
                    <h3 className="text-lg font-semibold">Preis</h3>
                  </div>
                  <p className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-medium">{selectedMaterial.price}</p>
                </div>         
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-b from-green-500 to-teal-500 w-1 h-8 rounded-full mr-4"></div>
                <h2 className="text-2xl font-bold text-gray-800">Anwendungen</h2>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
                <ul className="space-y-3">
                {selectedMaterial?.applications ? 
                  selectedMaterial.applications.split(', ').map((anwendung, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mr-4"></div>
                      <span>{anwendung.trim()}</span>
                    </li>
                  )) : (
                    <li className="text-gray-500">Keine Anwendungen verfügbar</li>
                  )
                }
                </ul>
              </div>
            </div>         
          </div>
        </div>
    );
}

export default MaterialCard;