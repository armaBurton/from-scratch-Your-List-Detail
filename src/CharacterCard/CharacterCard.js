import { Link } from 'react-router-dom';

export default function CharacterCard({ character }){

  return <Link to={`/CharacterDetail/${character.id}`} > 
    <div className='character-card'>
      <h1 className='character-name'>{character.name}</h1>
      <p className="publisher">{character.biography__publisher}</p>
      <img src={character.images__sm} alt="" />
    </div>
  </Link>;
}