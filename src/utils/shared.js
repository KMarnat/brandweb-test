export const fetchData = async (setIsLoading, setGames, KEY) => {
  try {
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

export const fetchSearchData = async (setIsLoading, setSearchedGames, KEY, query) => {
  if (query.length < 3) {
    setSearchedGames([]);
    return;
  }
  try {
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
