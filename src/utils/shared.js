import { getDocs, addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase.config";

export const fetchData = async (setIsLoading, setGames, KEY) => {
  try {
    setIsLoading(true);
    const res = await fetch(`https://api.rawg.io/api/games?key=${KEY}`);
    if (!res) throw new Error("Error fetchin data");

    const newData = await res.json();
    setGames(newData.results);
  } catch (err) {
    console.error(err.message);
  } finally {
    setIsLoading(false);
  }
};

export const fetchSearchData = async (setIsLoading, setGames, KEY, query) => {
  if (query.length < 3) {
    setGames([]);
    return;
  }
  try {
    setIsLoading(true);
    const res = await fetch(`https://api.rawg.io/api/games?key=${KEY}&search=${query}`);
    if (!res) throw new Error("Error fetching searched data");

    const newData = await res.json();
    setGames(newData.results);
  } catch (err) {
    console.error(err.message);
  } finally {
    setIsLoading(false);
  }
};

export const addDataToFirestore = async (filteredGames, fetchedGames) => {
  try {
    const gamesCollection = collection(db, filteredGames);

    // Empty array where games that are already in the collection will be added
    const existingGameNames = [];

    // PLaceholder empty array for the data of the games in firestore
    const fetchedFromFirestore = [];

    // Gets data from the collection, pushes it into the empty array "existingGameNames", to then filter out the ones that area already on there
    const gamesSnapshot = await getDocs(gamesCollection);
    gamesSnapshot.forEach((doc) => {
      existingGameNames.push(doc.data().name); // Exsting names get pushed into existingGameNames
      fetchedFromFirestore.push(doc.data()); // The entire collection gets puhsed into fetchedFromFirestore
    });

    // Filtering fetchedGames (games that are received from the API)
    // If the current game that is being looped over does not have a name in the database, it will be added
    const gamesData = fetchedGames
      .filter((game) => !existingGameNames.includes(game.name)) // Filter out duplicates
      .map((game) => {
        // Looping over the game that is not already in the database and adds the key value pairs.
        return { ...game };
      });

    // Add data to firestore
    await Promise.all(
      gamesData.map(async (gameData) => {
        await addDoc(gamesCollection, gameData);
      })
    );
  } catch (error) {
    console.error("Error:", error);
  }
};
