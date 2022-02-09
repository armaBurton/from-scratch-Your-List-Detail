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
  const [page, setPage] = useState(1);


  useEffect(() => {
    async function fetch(){

      const data = await getCharacters();

      setCharacters(data);
    }

    fetch();
  }, []);

  return <Router>
    <section className='the-great-hall-of-the-justice-league'>
      <div className="App">
        <div className="arrows">
          <button className='left' disabled={page === 1} onClick={() => setPage(page - 1)}>❮❮</button>
          <h2 className='page-number'>Page {page}</h2>
          <button onClick={() => setPage(page + 1)}>❯❯</button>
        </div>
        <div>
          <ul className="nav">
            <li>
              <Link className='link' to="/">home</Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path='/'>
          <CharactersPage characters={characters} />
        </Route>
        <Route></Route>
      </Switch>
    </section>
  </Router>;
}

export default App;
