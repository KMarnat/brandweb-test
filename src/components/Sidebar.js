import logo from '../assets/logo.svg';
import socials from '../assets/socials.svg';
import about from '../assets/about.svg';
import challenges from '../assets/challenges.svg';
import help from '../assets/help.svg';
import news from '../assets/news.svg';
import partners from '../assets/partners.svg';
import teams from '../assets/teams.svg';
import tournaments from '../assets/tournaments.svg';
import { useState } from 'react';

export function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function toggleSidebar() {
    setOpenSidebar((openSidebar) => !openSidebar);
  }

  return (
    <div className={openSidebar ? 'sidebar active-sidebar' : 'sidebar'}>
      <button className="sidebar__toggle" onClick={toggleSidebar}>
        {openSidebar ? '«' : '»'}
      </button>
      <img src={logo} alt="logo" className="sidebar__logo" />
      <div>
        <div className="sidebar__menu">
          <div className="title">
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
        <div className="sidebar__menu">
          <h4 className="title">OTHER</h4>
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
      </div>
      <div className="sidebar__bottom">
        <button className="sidebar__btn">CREATE</button>
        <img src={socials} alt="social icons" className="sidebar__socials" />
      </div>
    </div>
  );
}
