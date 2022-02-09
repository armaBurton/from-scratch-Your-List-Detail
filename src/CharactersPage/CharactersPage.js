import { useState } from 'react';

export default function CharactersPage(props){
  console.log(props.characters);

  const [page, setpage] = useState(1);

  return <>
    <h2>Page {page}</h2>
  </>;
}