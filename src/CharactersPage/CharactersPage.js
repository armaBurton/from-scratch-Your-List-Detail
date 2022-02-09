import CharacterCard from '../CharacterCard/CharacterCard';

export default function CharactersPage(props){

  return (
    <section className='the-great-hall-of-the-justice-league'>
      <div className='display-case'>
        {
          props.characters.map((character, i) => <CharacterCard key={character + i} character={character}/>)
        }
      </div>
    </section>
  ); 
}