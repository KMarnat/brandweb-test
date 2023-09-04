import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowButton } from './ArrowButton';
import bell from '../assets/bell.svg';

export function Header({ query, setQuery }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__actions">
        <ArrowButton onClick={() => navigate(-1)}>&lt;</ArrowButton>
        <ArrowButton onClick={() => navigate(+1)}>&gt;</ArrowButton>

        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => {
            setQuery(e.target.value);
            navigate(`/search?${e.target.value}`);
          }}
          value={query}
        ></input>
      </div>
      <div className="header__useractions">
        {!loggedIn ? (
          <>
            <Link to={'/login'}>
              <button
                className="login btn-secondary"
                // onClick={() => setLoggedIn((loggedIn) => !loggedIn)}
              >
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className="register btn-primary">Sign up</button>
            </Link>
          </>
        ) : (
          <>
            <div className="header__user">
              <Link to={'/profile'}>
                <div className="header__user-info">
                  <h4>Neroin</h4>
                  <p>Alexander Juul Jakobsen</p>
                </div>
              </Link>
              <Link to={'/profile'}>
                <img
                  src="https://brandweb.agency/wp-content/uploads/2023/04/brandweb_alexander.png"
                  className="header__user-avatar"
                  alt="avatar"
                />
              </Link>
            </div>
            <div className="header__user-notifications">
              <img src={bell} className="user__notifications-bell" alt="bell notification" />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
