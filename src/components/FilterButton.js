export function FilterButton({ KEY, handleFiltering, activeTab, filter }) {
  return (
    <button
      className={activeTab === filter.activeTab ? 'active' : ''}
      onClick={() =>
        handleFiltering(
          `https://api.rawg.io/api/games?key=${KEY}&${filter.apiRoute}`,
          filter.activeTab,
          filter.filteredBy
        )
      }
    >
      {filter.filterName}
    </button>
  );
}
