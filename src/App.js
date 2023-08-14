import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export default function App() {
  return (
    <div className="project">
      <Sidebar />
      <div>
        <Header />
        <Filter />
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="filter">
      <h2>Games</h2>
      <div className="filter--hashtag">
        <p className="active">#All</p>
        <p>#Recent</p>
        <p>#Upcoming</p>
        <p>#Top100</p>
      </div>
    </div>
  );
}
