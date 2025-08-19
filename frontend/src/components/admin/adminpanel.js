import { Settings, X, Lock } from 'lucide-react';

const Adminpanel = ({ onClose }) => {
    return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-6 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-center mb-6"> 
                <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Settings className="text-red-600"></Settings>
                <span>Admin Panel</span>
                </h2>
                <button
                    onClick={() => onClose()}
                    className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors" 
                >
                    <X size={20} />
                </button>
            </div>
            <div className="text-center">
                <Lock className="mx-auto w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-4">Passwort</h3>
                <input type="password" 
                placeholder="Passwort" 
                className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                <button onClick={() => onClose()} 
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                Anmelden
                </button>
            </div>
        </div>
    </div>
    );
};

export default Adminpanel;