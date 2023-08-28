import { Card } from './Card';
import { SkeletonCard } from './SkeletonCard.js';

export function SearchResults({
  games,
  activeTab,
  isLoading,
  setSelectedGame,
  searchedGames,
  query,
}) {
  const resultsTitle = ['All games', 'Recent games', 'Most anticipated', 'Top games'];
  const totalSkeletonCards = 20;

  return (
    <div className="results">
      {searchedGames ? (
        <h4>Search results for '{query}'</h4>
      ) : (
        <h4>{resultsTitle[activeTab - 1]}</h4>
      )}
      <div className="results__grid">
        {isLoading
          ? Array.from({ length: totalSkeletonCards }).map((_, i) => <SkeletonCard key={i} />)
          : games.map((game) => (
              <Card
                key={game.id}
                name={game.name}
                poster={game.background_image}
                genres={game.genres}
                isLoading={isLoading}
                id={game.id}
                setSelectedGame={setSelectedGame}
              />
            ))}
      </div>
    </div>
  );
}
