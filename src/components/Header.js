import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowButton } from "./ArrowButton";
import bell from "../assets/bell.svg";

export function Header({ query, setQuery }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__actions">
        <ArrowButton onClick={() => navigate(-1)} className={"header__actions-navbtn"}>
          &lt;
        </ArrowButton>
        <ArrowButton onClick={() => navigate(+1)} className={"header__actions-navbtn"}>
          &gt;
        </ArrowButton>

        <input
          type="search"
          placeholder="Search..."
          className="header__search"
          onChange={(e) => {
            setQuery(e.target.value);
            navigate(`/search?${e.target.value}`);
          }}
          value={query}
        />
      </div>
      <div className="header__useractions">
        {!loggedIn ? (
          <>
            <Link to={"/login"}>
              <button
                className="header__btn btn-secondary"
                onClick={() => setLoggedIn((loggedIn) => !loggedIn)}
              >
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="header__btn btn-primary">Sign up</button>
            </Link>
          </>
        ) : (
          <>
            <div className="header__user">
              <Link to={"/profile"}>
                <div className="header__user-info">
                  <h4>randomName123</h4>
                  <p>Bob McBob</p>
                </div>
              </Link>
              <Link to={"/profile"}>
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
