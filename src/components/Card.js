import participate from '../assets/participate.svg';
import addfriend from '../assets/addfriend.svg';
import addfavorite from '../assets/addfavorite.svg';
import repost from '../assets/repost.svg';
import { Link } from 'react-router-dom';

export function Card({ name, poster, genres, id, setSelectedGame, selectedGame }) {
  return (
    <article className="card" onClick={() => setSelectedGame(id)}>
      <Link to={`/selected/${id}`}>
        <div className="card__shadow"></div>
        <div className="adaptive">
          <div className="adaptive-photo">
            <img src={poster} alt="game poster" className="card__poster" />
          </div>
        </div>
        <div className="card__content">
          <div className="card__description">
            <h2>{name}</h2>
            <p>
              {genres.map((genre, i) => (
                <span key={i}>
                  {genre.name}
                  {i !== genres.length - 1 && ' | '}
                </span>
              ))}
            </p>
          </div>
          <div className="card__icons">
            <img className="icon" src={participate} alt="crosshair icon" />
            <img className="icon" src={addfriend} alt="add friend icon" />
            <img className="icon" src={addfavorite} alt="add favorite icon" />
            <img className="icon" src={repost} alt="repost icon" />
          </div>
        </div>
      </Link>
    </article>
  );
}
