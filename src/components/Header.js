import bell from '../assets/bell.svg';

export function Header() {
  return (
    <header className="header">
      <div className="header--left">
        <button>&lt;</button>
        <button>&gt;</button>
        <input type="text" placeholder="Search..."></input>
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
