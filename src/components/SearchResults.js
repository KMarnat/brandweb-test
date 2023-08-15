import { Card } from './Card';

export function SearchResults({ games, activeTab }) {
  const resultsTitle = ['All games', 'Recent games', 'Most anticipated', 'Top games'];

  return (
    <div className="results">
      <h4>{resultsTitle[activeTab - 1]}</h4>
      <div className="results--grid">
        {games.map((game) => (
          <Card key={game.id} name={game.name} poster={game.background_image} />
        ))}
      </div>
    </div>
  );
}
