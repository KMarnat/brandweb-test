import bell from '../assets/bell.svg';
import { ArrowButton } from './ArrowButton';

export function Header({ query, setQuery, setSelectedGame, selectedGame }) {
  function onChange(e) {
    setQuery(e.target.value);
  }

  function handleClearSelectedGame() {
    setSelectedGame(null);
  }

  // console.log(selectedGame);

  return (
    <header className="header">
      <div className="header__actions">
        <ArrowButton onClick={handleClearSelectedGame} className={selectedGame && 'active'}>
          &lt;
        </ArrowButton>
        <ArrowButton>&gt;</ArrowButton>

        <input type="text" placeholder="Search..." onChange={onChange} value={query}></input>
      </div>
      <div className="header__useractions">
        <div className="user">
          <div className="header__user-info">
            <h4>Neroin</h4>
            <p>Alexander Juul Jakobsen</p>
          </div>
          <div className="">
            <img
              src="https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png"
              className="profile"
              alt="profile"
            />
          </div>
        </div>
        <div className="user__notifications">
          <img src={bell} className="bell" alt="bell notification" />
        </div>
      </div>
    </header>
  );
}
