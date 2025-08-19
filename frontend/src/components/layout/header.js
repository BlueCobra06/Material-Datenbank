const Header = () => {
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
                </div>
            </div>
        </nav>
    );
};

export default Header;
