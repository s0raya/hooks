import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemonData = useFetchCharacters(urlPokemon);
  const rickAndMortyData = useFetchCharacters(urlRick);

  return (
    <>
      <h2>Pokemon</h2>
      <p>{pokemonData.nameCharacter}</p>
      <img src={pokemonData.imgCharacter} alt={pokemonData.nameCharacter} />

      <h2>Rick And Morty</h2>
      <p>{rickAndMortyData.nameCharacter}</p>
      <img src={rickAndMortyData.imgCharacter} alt={rickAndMortyData.nameCharacter} />
    </>
  );
}

export default App;
