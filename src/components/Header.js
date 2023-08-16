import bell from '../assets/bell.svg';
import { ArrowButton } from './ArrowButton';

export function Header({ query, setQuery, setSelectedGame }) {
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  function handleClearSelectedGame() {
    setSelectedGame(null);
    console.log('hello');
  }

  return (
    <header className="header">
      <div className="header--left">
        <ArrowButton onClick={handleClearSelectedGame}>&lt;</ArrowButton>
        <ArrowButton>&gt;</ArrowButton>
        <input type="text" placeholder="Search..." onChange={onChange} value={query}></input>
      </div>
      <div className="header--right">
        <div className="header--right__text">
          <h4>Neroin</h4>
          <p>Alexander Juul Jakobsen</p>
        </div>
        <img
          src="https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png"
          className="header--right__profile"
          alt="profile"
        />
        <img src={bell} className="header--right__bell" alt="bell notification" />
      </div>
    </header>
  );
}
