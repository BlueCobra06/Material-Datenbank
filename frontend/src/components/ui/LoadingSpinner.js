const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
            <span>Materialien werden geladen...</span>
        </div>
    );
}

export default LoadingSpinner;
