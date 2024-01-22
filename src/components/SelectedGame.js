import { useState, useEffect } from "react";
import { GameDetail } from "./GameDetail";
import { Metacritic } from "./Metacritic";
import { SkeletonSelect } from "./SkeletonSelect";

export function SelectedGame() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGame, setSelectedGame] = useState(window.location.pathname.split("selected/")[1]);
  const [query, setQuery] = useState(window.location.search);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGameData, setSelectedGameData] = useState({});
  const englishAbout = selectedGameData.description_raw?.slice(
    0,
    selectedGameData.description_raw.indexOf("Español")
  );

  function toggleExpanded() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  // When selectedGame state changes, ie a game card is pressed, it runs the fetching of the data.
  useEffect(() => {
    if (selectedGame !== null || localStorage.getItem("Game_ID")) {
      fetchGameData(localStorage.getItem("Game_ID") || selectedGame);
      setQuery("");
    }
  }, [selectedGame]);

  // Uses selected games ID and fetches it and stores the data into selectedGameData
  const fetchGameData = async (selectedGame) => {
    try {
      setIsLoading(true);
      setSelectedGameData([]);
      const res = await fetch(
        `https://api.rawg.io/api/games/${selectedGame}?key=01e85fc802ad4eb8850bc0b50857cb0b`
      );
      if (!res) throw new Error("Error fetching game data");

      const newData = await res.json();
      setSelectedGameData({ ...newData });
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // localStorage.setItem('Game_ID', selectedGame);

  return (
    <article className="selected">
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <>
          <div className="selected__overview">
            <img
              src={selectedGameData.background_image}
              className="selected__overview-cover"
              alt="game poster"
            />
            <h1>{selectedGameData.name}</h1>
            <div className="detail">
              <h2>About</h2>
              <p>
                {isExpanded
                  ? englishAbout
                  : englishAbout?.split(" ").slice(0, 30).join(" ") + "..."}
              </p>
              <button onClick={toggleExpanded} className="detail__expander">
                {isExpanded ? "Show less..." : "Show more..."}
              </button>
            </div>
          </div>
          <div className="selected__detail-grid">
            <GameDetail title="Released" detail={selectedGameData.released} />
            <GameDetail
              title="Platforms"
              detail={selectedGameData.platforms?.map((plat, i) => (
                <span key={i}>
                  {plat.platform.name} {i !== selectedGameData.platforms.length - 1 && " | "}
                </span>
              ))}
            />

            <GameDetail
              title="Developers"
              detail={selectedGameData.developers?.map((dev, i) => (
                <span key={dev.id}>
                  {dev.name} {i !== selectedGameData.developers.length - 1 && " | "}
                </span>
              ))}
            />
            <GameDetail
              title="Publishers"
              detail={selectedGameData.publishers?.map((publisher, i) => (
                <span key={publisher.id}>
                  {publisher.name} {i !== selectedGameData.publishers.length - 1 && " | "}
                </span>
              ))}
            />
            <GameDetail
              title="Genres"
              detail={selectedGameData.genres?.map((genre, i) => (
                <span key={genre.id}>
                  {genre.name} {i !== selectedGameData.length - 1 && " | "}
                </span>
              ))}
            />
            <GameDetail title="Rating" detail={selectedGameData.rating + "/5"} />
            {selectedGameData.metacritic && (
              <Metacritic selectedMetacritic={selectedGameData.metacritic} />
            )}
          </div>
        </>
      )}
    </article>
  );
}
