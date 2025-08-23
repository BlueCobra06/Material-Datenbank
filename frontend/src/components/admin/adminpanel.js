import { Shield, X } from 'lucide-react';
import { useState } from 'react';

const Adminpanel = ({ onClose, onLoginSuccess = () => {} }) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = async () => {
       const response = await fetch('http://localhost:8080/api/auth/login', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({username: username,password: password})
       });
       const data = await response.json();
       console.log('Login response:', data);
       if (data.success) {
           console.log('Login successful, calling onLoginSuccess');
           onLoginSuccess();
       } else {
           alert('Login fehlgeschlagen');
       }
   }


    return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-6 rounded-xl max-w-lg w-full max-h-[80vh] overflow-auto">
            <div className="flex justify-between items-center mb-6"> 
                <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Shield className="text-red-600"></Shield>
                <span>Admin Panel</span>
                </h2>
                <button
                    onClick={() => onClose()}
                    className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors" 
                >
                    <X size={20} />
                </button>
            </div>
            <div className="flex flex-col space-y-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Benutzername</h3>
                    <input type="text" 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Benutzernamen" 
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Passwort</h3>
                    <input type="password"
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Passwort" 
                    className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
            </div>
            <div className="flex items-center space-x-4 justify-center mt-2">               
                <button onClick={() => onClose()} 
                    className="w-full bg-white text-black border-gray-600 border px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Abbrechen
                </button>
                <button onClick={handleLogin} 
                    className="w-full bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                    Anmelden
                </button>
            </div>
        </div>
    </div>
    );
};

export default Adminpanel;