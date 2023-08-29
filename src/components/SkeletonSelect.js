import { GameDetail } from './GameDetail';

export function SkeletonSelect() {
  return (
    <>
      <div className="selected__overview skeleton--selected">
        <img className="selected__overview-cover" alt="game poster" />
        <GameDetail title="" detail="" />
      </div>
      <div className="selected__detail-grid skeleton--selected">
        <>
          <GameDetail title="" detail={''} />
          <GameDetail title="" detail={''} />

          <GameDetail title="" detail={''} />
          <GameDetail title="" detail={''} />
          <GameDetail title="" detail={''} />
          <GameDetail title="" detail={''} />
        </>
      </div>
    </>
  );
}
