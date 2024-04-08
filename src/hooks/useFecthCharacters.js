import { useState, useEffect } from "react"


const useFetchCharacters = (url) => {
    const [nameCharacter, setNameCharacter] = useState(null);
    const [imgCharacter, setImgCharacter ] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {    
        const functionFetch = async () => {
            try {
                const response = await fetch(url);                
                if (!response.ok) throw new Error('Error al obtener los personajes');
                const data = await response.json();
                setNameCharacter(data.name);
                if(url.includes('pokeapi')) {setImgCharacter(data.sprites.front_default)}
                else {setImgCharacter(data.image)}
            } catch (error) {
                setError(error.message);
            }
        }
        functionFetch();
    }, []);   
    return { nameCharacter, imgCharacter, error };
}

export default useFetchCharacters;
