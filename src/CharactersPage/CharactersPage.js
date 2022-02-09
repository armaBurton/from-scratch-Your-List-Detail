import CharacterCard from '../CharacterCard/CharacterCard';

export default function CharactersPage(props){

  return (
    <section className='display-case'>
      {
        props.characters.map((character, i) => <CharacterCard key={character + i} character={character}/>)
      }
    </section>
  ); 
}