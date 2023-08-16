import participate from '../assets/participate.svg';
import addfriend from '../assets/addfriend.svg';
import addfavorite from '../assets/addfavorite.svg';
import repost from '../assets/repost.svg';

export function SkeletonCard() {
  return (
    <article className="results--grid__card">
      <div className="results--grid__card--poster skeleton"></div>
      <div className="results--grid__card--content">
        <div className="results--grid__card--description">
          <h2 className="skeleton">placeholder</h2>
          <h2 className="skeleton">placeholder</h2>
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
