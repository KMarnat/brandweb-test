import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { SelectedGame } from './components/SelectedGame';

import { Outlet } from 'react-router-dom';

export default function App() {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);

  const [selectedGame, setSelectedGame] = useState(localStorage.getItem('Game_ID') || null);
  const [selectedGameData, setSelectedGameData] = useState({});

  // console.log(games);

  // console.log(selectedGameData);

  // Resets site to the state it is as it first loads
  // const resetSite = () => {
  //   setQuery('');
  //   setSelectedGame(null);
  //   handleFiltering(`https://api.rawg.io/api/games?key=${KEY}`, 1, 'all');
  //   localStorage.removeItem('Game_ID', selectedGame);
  // };

  return (
    <>
      <Sidebar />
      <Header
        query={query}
        setQuery={setQuery}
        setSelectedGame={setSelectedGame}
        selectedGame={selectedGame}
      />
      <main className="main">
        <Outlet />
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
          <></>
        )}
      </main>
    </>
  );
}
