import { FilterButton } from './FilterButton.js';
import filters from '../filters.js';

export function Filter({ KEY, activeTab, handleFiltering }) {
  return (
    <div className="filter">
      <h2>Games</h2>
      <div className="filter__hashtag">
        {filters.map((filter) => (
          <FilterButton
            key={filter.activeTab}
            KEY={KEY}
            activeTab={activeTab}
            handleFiltering={handleFiltering}
            filter={filter}
          />
        ))}
      </div>
    </div>
  );
}
