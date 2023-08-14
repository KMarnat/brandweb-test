import logo from './assets/logo.svg';
import socials from './assets/socials.svg';
import about from './assets/about.svg';
import challenges from './assets/challenges.svg';
import help from './assets/help.svg';
import news from './assets/news.svg';
import partners from './assets/partners.svg';
import teams from './assets/teams.svg';
import tournaments from './assets/tournaments.svg';
import bell from './assets/bell.svg';

export default function App() {
  return (
    <div className="project">
      <Sidebar />
      <Header />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="sidebar--logo" />
      <div className="sidebar--menu">
        <div className="sidebar--title">
          <h4>ACTIVITIES</h4>
        </div>
        <ul>
          <li>
            <img src={challenges} alt="challenges icon" />
            <a href="#">Games</a>
          </li>
          <li>
            <img src={tournaments} alt="tournaments icon" />
            <a href="#">Tournaments</a>
          </li>
          <li>
            <img src={teams} alt="teams icon" />
            <a href="#">Teams</a>
          </li>
        </ul>
      </div>
      <div className="sidebar--menu">
        <h4 className="sidebar--title">OTHER</h4>
        <ul>
          <li>
            <img src={news} alt="challenges icon" />
            <a href="#">News</a>
          </li>
          <li>
            <img src={partners} alt="partners icon" />
            <a href="#">Partners</a>
          </li>
          <li>
            <img src={about} alt="about icon" />
            <a href="#">About</a>
          </li>
          <li>
            <img src={help} alt="help icon" />
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <button className="sidebar--btn">CREATE</button>
      <img src={socials} alt="social icons" className="sidebar--socials" />
    </div>
  );
}

function Header() {
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
        <img className="header--profile" alt="profile image" />
        <img src={bell} />
      </div>
    </header>
  );
}
