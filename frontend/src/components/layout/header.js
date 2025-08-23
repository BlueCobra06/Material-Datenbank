import { useState } from "react";
import Adminpanel from "../admin/adminpanel";
import { Shield } from "lucide-react";

const Header = () => {
    const [adminpanel, setAdminpanel] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        setAdminpanel(false);
        window.location.reload(); 
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        window.location.reload();
    };

    return (
        <nav className="bg-white shadow-lg border-b border-gray-100">
            <div className="max-w-8xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <span className="text-2xl px-4 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Materialdatenbank</span>   
                    </div>
                    <div className="flex items-center">
                        {!isAuthenticated ? (
                            <button 
                                onClick={() => setAdminpanel(true)}
                                className="bg-red-600 border border-gray-300 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                                <Shield size={18} />
                                <span>Admin Login</span>
                            </button>
                        ) : (
                            <button 
                                onClick={handleLogout}
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                                Logout
                            </button>
                        )}
                    </div>
                    {adminpanel && (
                        <Adminpanel 
                            onClose={() => setAdminpanel(false)}
                            onLoginSuccess={handleLoginSuccess}
                        />
                    )}   
                </div>
            </div>
        </nav>
    );
};

export default Header;
