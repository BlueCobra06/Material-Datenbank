import { useState, useEffect } from 'react';

const useMaterials = () => {
    const [materials, setMaterials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/api/materials')
            .then(response => response.json())
            .then(data => {
                console.log('API Antwort:', data);
                setMaterials(data);
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return { materials, loading };
}

export default useMaterials;

    