import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [query, setQuery] = useState('');

  const [selectedGame, setSelectedGame] = useState(localStorage.getItem('Game_ID') || null);

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
      </main>
    </>
  );
}
