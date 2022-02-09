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
import CharacterDetail from './CharacterDetail/CharacterDetail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const perPage = 30;

  useEffect(() => {
    async function fetch(){
      const from = page * perPage - perPage;
      const to = page * perPage;

      const data = await getCharacters(from, to, search);

      setQuery('');
      setCharacters(data);
    }

    fetch();
  }, [page, search]);

  function handleSearch(e){
    e.preventDefault();
    setSearch(query);
  }

  return <Router>
    <section className=''>
      <div className="App">
        <div className="arrows">
          <button className='left' disabled={page === 1} onClick={() => setPage(page - 1)}>❮❮</button>
          <h2 className='page-number'>Page {page}</h2>
          <button onClick={() => setPage(page + 1)}>❯❯</button>
          <form className="search" onSubmit={handleSearch}>
            <p>search</p>
            <input type="text" onChange={(e) => setQuery(e.target.value)}/>
          </form>
        </div>
        <div>
          <ul className="nav">
            <li>
              <Link className='link' to="/" onClick={() => setPage(1)}>home</Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path='/'>
          <CharactersPage characters={characters} />
        </Route>
        <Route exact path={`/CharacterDetail/:id`}>
          <CharacterDetail />
        </Route>
      </Switch>
    </section>
  </Router>;
}

export default App;