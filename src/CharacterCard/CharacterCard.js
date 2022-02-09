export default function CharacterCard({ character }){
  console.log(character);

  return <div className='character-card'>
    <h1 className='character-name'>{character.name}</h1>
  </div>;
}