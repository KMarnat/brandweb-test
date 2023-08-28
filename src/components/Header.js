import bell from '../assets/bell.svg';
import { ArrowButton } from './ArrowButton';

export function Header({ query, setQuery, setSelectedGame, selectedGame }) {
  return (
    <header className="header">
      <div className="header__actions">
        <ArrowButton onClick={() => setSelectedGame(null)} className={selectedGame && 'active'}>
          &lt;
        </ArrowButton>
        <ArrowButton>&gt;</ArrowButton>

        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        ></input>
      </div>
      <div className="header__useractions">
        <div className="header__user">
          <div className="header__user-info">
            <h4>Neroin</h4>
            <p>Alexander Juul Jakobsen</p>
          </div>
          <img
            src="https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png"
            className="header__user-avatar"
            alt="avatar"
          />
        </div>
        <div className="header__user-notifications">
          <img src={bell} className="user__notifications-bell" alt="bell notification" />
        </div>
      </div>
    </header>
  );
}
