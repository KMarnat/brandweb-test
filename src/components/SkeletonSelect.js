import { GameDetail } from './GameDetail';

export function SkeletonSelect() {
  return (
    <>
      <div className="selected__overview  ">
        <div className="selected__overview-cover skeleton skeleton-cover--selected" />
        <GameDetail title="" detail="" />
        <h1 className="skeleton skeleton-title">placeholder</h1>
        <h2 className="skeleton skeleton-text">placeholder</h2>
      </div>
      <div className="selected__detail-grid skeleton__grid">
        <>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </>
      </div>
    </>
  );
}
