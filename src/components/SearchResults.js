import { Card } from './Card';
import { SkeletonCard } from './SkeletonCard.js';

export function SearchResults({ games, activeTab, isLoading, setSelectedGame }) {
  const resultsTitle = ['All games', 'Recent games', 'Most anticipated', 'Top games'];
  const totalSkeletonCards = 20;

  return (
    <div className="results">
      <h4>{resultsTitle[activeTab - 1]}</h4>
      <div className="results--grid">
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
