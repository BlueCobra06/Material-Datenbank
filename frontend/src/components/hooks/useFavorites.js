import { useState } from "react";

const useFavorites = () => {
    const togglefavoriten = (id) => {
        const newfavoriten = new Set(favoriten);
        if (newfavoriten.has(id)) {
            newfavoriten.delete(id);
        } else {
            newfavoriten.add(id);
        }
        setFavoriten(newfavoriten);
        localStorage.setItem('favoriten', JSON.stringify(Array.from(newfavoriten)));
    }
    
    const [favoriten, setFavoriten] = useState(() => {
        const saved = localStorage.getItem('favoriten');
        return saved ? new Set(JSON.parse(saved)) : new Set();
    });

    return { togglefavoriten, favoriten };
}
    
export default useFavorites;