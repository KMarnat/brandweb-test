import { useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SearchResults } from './components/SearchResults';
import { SelectedGame } from './components/SelectedGame';
import { fetchData, fetchSearchData } from './utils/shared';

export default function App() {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedGame, setSelectedGame] = useState(localStorage.getItem('Game_ID') || null);
  const [selectedGameData, setSelectedGameData] = useState({});

  const KEY = '01e85fc802ad4eb8850bc0b50857cb0b';

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

  // First load of the site, fetching the games
  useEffect(function () {
    fetchData(setIsLoading, setGames, KEY);
  }, []);

  // Data fetching when query changes, minimum length of characters is 3
  useEffect(() => {
    fetchSearchData(setIsLoading, setSearchedGames, KEY, query);
  }, [query]);

  // console.log(games);

  // When selectedGame state changes, ie a game card is pressed, it runs the fetching of the data.
  useEffect(() => {
    if (selectedGame !== null || localStorage.getItem('Game_ID')) {
      fetchGameData(localStorage.getItem('Game_ID') || selectedGame);
      setQuery('');
    }
  }, [selectedGame]);

  // Uses selected games ID and fetches it and stores the data inot selectedGameData
  const fetchGameData = async (selectedGame) => {
    try {
      setIsLoading(true);
      setSelectedGameData([]);
      const res = await fetch(
        `https://api.rawg.io/api/games/${selectedGame}?key=01e85fc802ad4eb8850bc0b50857cb0b`
      );
      if (!res) throw new Error('Error fetching game data');

      const newData = await res.json();
      console.log(newData);
      setSelectedGameData({ ...newData });
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(selectedGameData);

  // Resets site to the state it is as it first loads
  const resetSite = () => {
    setQuery('');
    setSelectedGame(null);
    handleFiltering(`https://api.rawg.io/api/games?key=${KEY}`, 1, 'all');
    localStorage.removeItem('Game_ID', selectedGame);
  };

  return (
    <>
      <Sidebar handleReset={resetSite} />
      <Header
        query={query}
        setQuery={setQuery}
        setSelectedGame={setSelectedGame}
        selectedGame={selectedGame}
        handleReset={resetSite}
      />
      <main className="main">
        {selectedGame ? (
          <SelectedGame
            selectedName={selectedGameData.name}
            selectedImg={selectedGameData.background_image}
            selectedDevs={selectedGameData.developers}
            selectedDesc={selectedGameData.description_raw}
            selectedRelease={selectedGameData.released}
            selectedRating={selectedGameData.rating}
            selectedPlatforms={selectedGameData.platforms}
            selectedPublishers={selectedGameData.publishers}
            selectedGenres={selectedGameData.genres}
            selectedMetacritic={selectedGameData.metacritic}
            selectedGame={selectedGame}
            isLoading={isLoading}
          />
        ) : (
          <>
            {!searchedGames.length && (
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
            )}
            {searchedGames.length ? (
              <SearchResults
                games={searchedGames}
                activeTab={activeTab}
                isLoading={isLoading}
                setSelectedGame={setSelectedGame}
                selectedGame={selectedGame}
                searchedGames={searchedGames}
                query={query}
                KEY={KEY}
              />
            ) : (
              <SearchResults
                games={searchedGames.length ? searchedGames : games}
                activeTab={activeTab}
                isLoading={isLoading}
                KEY={KEY}
                setSelectedGame={setSelectedGame}
                selectedGame={selectedGame}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
