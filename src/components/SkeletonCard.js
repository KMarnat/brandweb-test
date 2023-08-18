import participate from '../assets/participate.svg';
import addfriend from '../assets/addfriend.svg';
import addfavorite from '../assets/addfavorite.svg';
import repost from '../assets/repost.svg';

export function SkeletonCard() {
  return (
    <article className="card">
      <div className="card__poster skeleton"></div>
      <div className="card__content">
        <div className="description">
          <h2 className="skeleton">placeholder</h2>
          <h2 className="skeleton">placeholder</h2>
        </div>
        <div className="icons">
          <img src={participate} alt="crosshair icon" />
          <img src={addfriend} alt="add friend icon" />
          <img src={addfavorite} alt="add favorite icon" />
          <img src={repost} alt="repost icon" />
        </div>
      </div>
    </article>
  );
}
