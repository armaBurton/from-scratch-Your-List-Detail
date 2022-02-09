import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleCharacter } from '../services/fetch-utils';

export default function CharacterDetail(){
  const [characterCard, setCharacterCard] = useState({});
  const params = useParams();

  useEffect(() =>{
    async function onLoad(){
      const data = await getSingleCharacter(params.id);
      setCharacterCard(data);
    }

    onLoad();
  }, [params]);

  return <Link to='/'>
    <div className='detail-container'>
      <div className="detail-card">
        <img src={characterCard.images__md} alt={characterCard.name} />
        <div className="right-detail">
          <h1 className="detail-name">{characterCard.name}</h1>
          <p className="descriptor full-name">Full Name: <span className="stat full-name-stat">{characterCard.biography__fullName}</span></p>
          <p className="descriptor">First Appearance: <span className="stat">{characterCard.biography__firstAppearance}</span></p>
          <div className='line'></div>
          <div className="physiology">
            <p className="descriptor">Height: <span className="stat">{characterCard.appearance__height__001}</span></p>
            <p className="descriptor">Weight: <span className="stat">{characterCard.appearance__weight__001}</span></p>
            <p className="descriptor">Race: <span className="stat">{characterCard.appearance__race}</span></p>
            <p className="descriptor">Eye Color: <span className="stat">{characterCard.appearance__eyeColor}</span></p>
            <p className="descriptor">Hair Color: <span className="stat">{characterCard.appearance__hairColor}</span></p>
          </div>
          <div className='line'></div>
          <div className='ability-div'>
            <div className='stats'>
              <p className="descriptor">Strength: <span className="stat">{characterCard.powerstats__strength}</span></p>
              <p className="descriptor">Intelligence: <span className="stat">{characterCard.powerstats__intelligence}</span></p>
              <p className="descriptor">Speed: <span className="stat">{characterCard.powerstats__speed}</span></p>
              <p className="descriptor">Power: <span className="stat">{characterCard.powerstats__power}</span></p>
              <p className="descriptor">Combat: <span className="stat">{characterCard.powerstats__combat}</span></p>
              <p className="descriptor">Durability: <span className="stat">{characterCard.powerstats__durability}</span></p>
            </div>
            <div className='biography'>
              <p className="descriptor">Alignment: <span className="stat">{characterCard.biography__alignment}</span></p>
              <p className="descriptor">Place of Birth: <span className="stat">{characterCard.biography__placeOfBirth}</span></p>
              <p className="descriptor">Affiliation: <span className="stat">{characterCard.connections__groupAffiliation}</span></p>
              <p className="descriptor">Relatives: <span className="stat">{characterCard.connections__relatives}</span></p>
              <p className="descriptor">Alter-Egos: <span className="stat">{characterCard.biography__alterEgos}</span></p>
              <p className="descriptor">Occupation: <span className="stat">{characterCard.work__occupation}</span></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>;
}