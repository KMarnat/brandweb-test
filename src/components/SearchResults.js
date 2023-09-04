import { Card } from './Card';
import { SkeletonCard } from './SkeletonCard.js';
import { fetchData, fetchSearchData } from '../utils/shared';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Filter } from './Filter';

export function SearchResults() {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedGame, setSelectedGame] = useState(localStorage.getItem('Game_ID') || null);
  const navigate = useNavigate();
  const [query, setQuery] = useState(window.location.search);

  const resultsTitle = ['All games', 'Recent games', 'Most anticipated', 'Top games'];
  const totalSkeletonCards = 20;

  const KEY = '01e85fc802ad4eb8850bc0b50857cb0b';
  // First load of the site, fetching the games
  useEffect(
    function () {
      setQuery(window.location.search);
    },
    [window.location.search]
  );

  useEffect(
    function () {
      if (window.location.pathname === '/search' && !query) {
        navigate('/');
      }
      // Data fetching when query changes, minimum length of characters is 3
      if (query) {
        fetchSearchData(setIsLoading, setGames, KEY, query.replace('?', ' '));
      } else {
        fetchData(setIsLoading, setGames, KEY);
      }
    },
    [query]
  );
  /* If there is data in local storage, that data is displayed, after that a fetch function will run that will update the local storage (fetchAndUpdateLocalStorage(url, storageKey)), if no data is in local storage the else block will run, data is fetched and that is displayed and saved into local storage*/
  const handleFiltering = async (url, tabNumber, filteredCriteria) => {
    try {
      setIsLoading(true);

      const storageKey = `filteredGames_${filteredCriteria}`;
      const storedData = localStorage.getItem(storageKey);

      if (storedData) {
        const parsedData = JSON.parse(storedData);

        setQuery('');
        setGames(parsedData);
        setActiveTab(tabNumber);

        // Background fetch and update local storage
        fetchAndUpdateLocalStorage(url, storageKey);
      } else {
        const response = await fetch(url);
        const data = await response.json();

        setQuery('');
        setGames(data.results);
        setActiveTab(tabNumber);

        localStorage.setItem(storageKey, JSON.stringify(data.results));
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetches games and stores them in local storage
  const fetchAndUpdateLocalStorage = async (url, storageKey) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      localStorage.setItem(storageKey, JSON.stringify(data.results));
    } catch (err) {
      console.log('Background fetch error: ' + err.message);
    }
  };

  return (
    <>
      <Filter
        KEY={KEY}
        games={games}
        setGames={setGames}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleFiltering={handleFiltering}
      />
      <div className="results">
        {query ? (
          <h4>Search results for '{query.replace('?', ' ')}'</h4>
        ) : (
          <h4>{resultsTitle[activeTab - 1]}</h4>
        )}
        <div className="results__grid">
          {isLoading
            ? Array.from({ length: totalSkeletonCards }).map((_, i) => <SkeletonCard key={i} />)
            : games &&
              games.map((game) => (
                <Link to={`/selected/${game.id}`} key={game.id}>
                  <Card
                    key={game.id}
                    name={game.name}
                    poster={game.background_image}
                    genres={game.genres}
                    id={game.id}
                    setSelectedGame={setSelectedGame}
                    selectedGame={selectedGame}
                  />
                </Link>
              ))}
        </div>
      </div>
    </>
  );
}
