import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacters } from './services/fetch-utils';
import CharactersPage from './CharactersPage/CharactersPage';

function App() {
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    async function fetch(){

      const data = await getCharacters();

      setCharacters(data);
    }

    fetch();
  }, []);

  return <Router>
    <div className="App">
      <ul className="nav">
        <li>
          <Link className='link' to="/">home</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/'>
          <CharactersPage characters={characters} />
        </Route>
        <Route></Route>
      </Switch>
    </div>
  </Router>;
}

export default App;
