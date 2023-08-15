import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SearchResults } from './components/SearchResults';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

export default function App() {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const KEY = '01e85fc802ad4eb8850bc0b50857cb0b';

  useEffect(function () {
    const fetchData = async () => {
      try {
        // if (query.length < 3) return;
        setIsLoading(true);
        const res = await fetch(`https://api.rawg.io/api/games?key=${KEY}`);
        if (!res) throw new Error('🛑');

        const newData = await res.json();
        setGames(newData.results);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(games);
  // console.log(games);

  return (
    <div className="project">
      <Sidebar />
      <div>
        <Header query={query} setQuery={setQuery} />
        <Filter
          KEY={KEY}
          games={games}
          setGames={setGames}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        {isLoading ? (
          <ReactLoading
            type={'spin'}
            color="#f1f5ff"
            height={'10%'}
            width={'10%'}
            className="loading"
          />
        ) : (
          <SearchResults games={games} activeTab={activeTab} />
        )}
      </div>
    </div>
  );
}
