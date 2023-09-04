import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SelectedGame } from './components/SelectedGame';
import { Outlet } from 'react-router-dom';
import { getDocs, addDoc, collection } from 'firebase/firestore';
import { db } from './services/firebase.config';

export default function App() {
  const [query, setQuery] = useState('');

  const [selectedGame, setSelectedGame] = useState(localStorage.getItem('Game_ID') || null);

  // useEffect(() => {
  //   // Function to add data to Firestore
  //   const addDataToFirestore = async () => {
  //     try {
  //       const citiesCollection = collection(db, 'cities');

  //       // Add data to Firestore
  //       await addDoc(citiesCollection, {
  //         name: 'New York City',
  //         country: 'USA',
  //       });
  //       await addDoc(citiesCollection, {
  //         name: 'Paris',
  //         country: 'France',
  //       });
  //       await addDoc(citiesCollection, {
  //         name: 'Tokyo',
  //         country: 'Japan',
  //       });

  //       // Fetch data from Firestore
  //       const citiesSnapshot = await getDocs(citiesCollection);

  //       citiesSnapshot.forEach((doc) => {
  //         console.log('City Data:', doc.id, doc.data());
  //       });
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   // Call the function to add and retrieve data
  //   addDataToFirestore();
  // }, []);

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
