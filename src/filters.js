const filters = [
  {
    filterName: '#All',
    activeTab: 1,
    filteredBy: 'all',
    apiRoute: '',
  },
  {
    filterName: '#Recent',
    activeTab: 2,
    filteredBy: 'recent',
    apiRoute: 'dates=2023-01-01,2023-08-29&ordering=-added',
  },
  {
    filterName: '#Upcoming',
    activeTab: 3,
    filteredBy: 'upcoming',
    apiRoute: 'dates=2023-08-16,2024-12-31&ordering=-added',
  },
  {
    filterName: '#Top',
    activeTab: 4,
    filteredBy: 'top',
    apiRoute: 'dates=2001-01-01,2001-12-31&ordering=+rating',
  },
];

export default filters;
