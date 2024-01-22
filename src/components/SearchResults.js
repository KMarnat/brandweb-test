import { Card } from "./Card";
import { SkeletonCard } from "./SkeletonCard.js";
import { fetchData, fetchSearchData } from "../utils/shared";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter } from "./Filter";
import { db } from "../services/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { addDataToFirestore } from "../utils/shared";

export function SearchResults() {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [activeTab, setActiveTab] = useState(1);
  const [selectedGame, setSelectedGame] = useState(localStorage.getItem("Game_ID") || null);
  const navigate = useNavigate();
  const [query, setQuery] = useState(window.location.search);

  const resultsTitle = ["All games", "Recent games", "Most anticipated", "Top games"];
  const totalSkeletonCards = 20;

  const KEY = "01e85fc802ad4eb8850bc0b50857cb0b";

  // First load of the site, fetching the games
  useEffect(
    function () {
      if (window.location.search.length > 3) {
        setQuery(window.location.search);
      } else {
        setQuery("");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [window.location.search]
  );

  useEffect(
    function () {
      if (window.location.pathname === "/search" && !query) {
        navigate("/");
      }
      if (query.length >= 3) {
        fetchSearchData(setIsLoading, setGames, KEY, query.replace("?", " "));
      } else {
        setGames([]);

        fetchData(setIsLoading, setGames, KEY);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [query]
  );

  /* If data is in the database and it matches the filtering criteria then that data is used, if it does not exist, it will be fetched from the API */
  const handleFiltering = async (url, tabNumber, filteredCriteria) => {
    try {
      setIsLoading(true);

      const storageKey = `filteredGames_${filteredCriteria}`;
      const gamesCollection = collection(db, storageKey);

      const gamesSnapshot = await getDocs(gamesCollection);
      // Check if data is already in the Firestore collection
      if (gamesSnapshot.empty) {
        // If no data in collection, fetch it
        const response = await fetch(url);
        const data = await response.json();

        setQuery("");
        setGames(data.results);

        // Add the data to the collection
        addDataToFirestore(storageKey, data.results);
      } else {
        // Data already in collection, no need to fetch from API
        const firestoreGames = gamesSnapshot.docs.map((doc) => doc.data());
        setGames(firestoreGames);
      }

      setActiveTab(tabNumber);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
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
          <h4>Search results for '{query.replace("?", " ")}'</h4>
        ) : (
          <h4>{resultsTitle[activeTab - 1]}</h4>
        )}
        <div className="results__grid">
          {isLoading
            ? Array.from({ length: totalSkeletonCards }).map((_, i) => <SkeletonCard key={i} />)
            : games &&
              games.map((game) => (
                <Card
                  key={game.id}
                  name={game.name}
                  poster={game.background_image}
                  genres={game.genres}
                  id={game.id}
                  setSelectedGame={setSelectedGame}
                  selectedGame={selectedGame}
                />
              ))}
        </div>
      </div>
    </>
  );
}
