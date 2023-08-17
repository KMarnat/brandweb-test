import { useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SearchResults } from './components/SearchResults';
import { SelectedGame } from './components/SelectedGame';

export default function App() {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameData, setSelectedGameData] = useState({});

  const KEY = '01e85fc802ad4eb8850bc0b50857cb0b';

  useEffect(function () {
    const fetchData = async () => {
      try {
        // if (query.length < 3) return;
        setIsLoading(true);
        const res = await fetch(`https://api.rawg.io/api/games?key=${KEY}`);
        if (!res) throw new Error('Error fetchin data');

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

  useEffect(
    function () {
      const fetchData = async () => {
        try {
          // if (query.length < 3) return;
          setIsLoading(true);
          const res = await fetch(`https://api.rawg.io/api/games?key=${KEY}&search=${query}`);
          if (!res) throw new Error('Error fetching searched data');

          const newData = await res.json();
          setSearchedGames(newData.results);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      if (query.length < 3) {
        setSearchedGames([]);
        return;
      }
      fetchData();
    },
    [query]
  );

  // console.log(games);

  useEffect(() => {
    if (selectedGame !== null) {
      fetchGameData(selectedGame);
    }
  }, [selectedGame]);

  const fetchGameData = async (selectedGame) => {
    try {
      setIsLoading(true);
      setSelectedGameData([]);
      const res = await fetch(
        `https://api.rawg.io/api/games/${selectedGame}?key=01e85fc802ad4eb8850bc0b50857cb0b`
      );
      if (!res) throw new Error('Error fetching game data');

      const newData = await res.json();
      setSelectedGameData({ ...newData });
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(selectedGameData);

  return (
    <div className="project">
      <Sidebar />
      <div className="main">
        <Header
          query={query}
          setQuery={setQuery}
          setSelectedGame={setSelectedGame}
          selectedGame={selectedGame}
        />
        {selectedGame ? (
          <SelectedGame
            selectedId={selectedGameData.id}
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
            isLoading={isLoading}
          />
        ) : (
          <>
            <Filter
              KEY={KEY}
              games={games}
              setGames={setGames}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            {searchedGames.length ? (
              <SearchResults
                games={searchedGames}
                activeTab={activeTab}
                isLoading={isLoading}
                setSelectedGame={setSelectedGame}
                KEY={KEY}
              />
            ) : (
              <SearchResults
                games={searchedGames.length ? searchedGames : games}
                activeTab={activeTab}
                isLoading={isLoading}
                KEY={KEY}
                setSelectedGame={setSelectedGame}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
