import MaterialGrid from './materialgrid';
import MaterialList from './materiallist';
import MaterialCard from './materialcard';
import { Package } from 'lucide-react';
import { useState } from 'react';

const Materialview = ({ filteredMaterialien, togglefavoriten, favoriten, viewMode }) => {
    const [details, setDetails] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    
    return (
        <div>
        {filteredMaterialien.length === 0 && (
        <div className="text-center py-8">
          <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <p className="text-gray-600">Keine Materialien gefunden.</p>
        </div>
      )} 
            
      {filteredMaterialien.length > 0 && viewMode === 'grid' && (
        <MaterialGrid filteredMaterialien={filteredMaterialien} 
                      togglefavoriten={togglefavoriten} 
                      favoriten={favoriten} 
                      setSelectedMaterial={setSelectedMaterial} 
                      setDetails={setDetails} />
      )}
    
      {filteredMaterialien.length > 0 && viewMode === 'list' && (
        <MaterialList filteredMaterialien={filteredMaterialien} 
                      togglefavoriten={togglefavoriten} 
                      favoriten={favoriten} 
                      setSelectedMaterial={setSelectedMaterial} 
                      setDetails={setDetails} />
                              
      )}
    
        {details && (<MaterialCard selectedMaterial={selectedMaterial} setDetails={setDetails} />)}
    </div>
    );
}

export default Materialview;