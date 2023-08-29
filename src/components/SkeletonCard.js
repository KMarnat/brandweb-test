import participate from '../assets/participate.svg';
import addfriend from '../assets/addfriend.svg';
import addfavorite from '../assets/addfavorite.svg';
import repost from '../assets/repost.svg';

export function SkeletonCard() {
  return (
    <article className="card">
      <div className="adaptive ">
        <div className="adaptive-photo skeleton skeleton-cover">
          <div alt="game poster" className="card__poster "></div>
        </div>
      </div>
      <div className="card__content">
        <div className="card__description">
          <h2 className="skeleton skeleton-title">placeholder</h2>
          <h2 className="skeleton skeleton-text">placeholder</h2>
        </div>
        <div className="card__icons skeleton skeleton__icons">
          <img src={participate} alt="crosshair icon" />
          <img src={addfriend} alt="add friend icon" />
          <img src={addfavorite} alt="add favorite icon" />
          <img src={repost} alt="repost icon" />
        </div>
      </div>
    </article>
  );
}
