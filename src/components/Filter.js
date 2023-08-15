export function Filter({ games, setGames, KEY, activeTab, setActiveTab, setIsLoading }) {
  const handleFiltering = async (url, tabNumber) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.results);
      setGames(data.results);
      setActiveTab(tabNumber);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="filter">
      <h2>Games</h2>
      <div className="filter--hashtag">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleFiltering(`https://api.rawg.io/api/games?key=${KEY}`, 1)}
        >
          #All
        </button>
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() =>
            handleFiltering(
              `https://api.rawg.io/api/games?key=${KEY}&dates=2023-01-01,2023-08-08&ordering=-added`,
              2
            )
          }
        >
          #Recent
        </button>
        <button
          className={activeTab === 3 ? 'active' : ''}
          onClick={() =>
            handleFiltering(
              `https://api.rawg.io/api/games?key=${KEY}&dates=2023-08-16,2024-12-31&ordering=-added`,
              3
            )
          }
        >
          #Upcoming
        </button>
        <button
          className={activeTab === 4 ? 'active' : ''}
          onClick={() =>
            handleFiltering(
              `https://api.rawg.io/api/games?key=${KEY}&dates=2001-01-01,2001-12-31&ordering=+rating`,
              4
            )
          }
        >
          #Top100
        </button>
      </div>
    </div>
  );
}
