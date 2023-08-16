import participate from '../assets/participate.svg';
import addfriend from '../assets/addfriend.svg';
import addfavorite from '../assets/addfavorite.svg';
import repost from '../assets/repost.svg';

export function Card({ name, poster, genres, isLoading, id, setSelectedGame, KEY }) {
  function handleGameClick(id) {
    setSelectedGame(id);
  }

  return (
    <article className="results--grid__card" onClick={() => handleGameClick(id)}>
      <img src={poster} alt="game poster" className="results--grid__card--poster" />
      <div className="results--grid__card--shadow"></div>
      <div className="results--grid__card--content">
        <div className="results--grid__card--description">
          <h2>{name.length < 20 ? name : `${name.substring(0, 20)}...`}</h2>
          <p>
            {genres.map((genre, i) => (
              <span key={i}>
                {genre.name}
                {i !== genres.length - 1 && ' | '}
              </span>
            ))}
          </p>
        </div>
        <div className="results--grid__card--icons">
          <img src={participate} alt="crosshair icon" />
          <img src={addfriend} alt="add friend icon" />
          <img src={addfavorite} alt="add favorite icon" />
          <img src={repost} alt="repost icon" />
        </div>
      </div>
    </article>
  );
}
