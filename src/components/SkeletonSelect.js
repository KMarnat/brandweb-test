import { GameDetail } from './GameDetail';

export function SkeletonSelect() {
  return (
    <>
      <div className="selected--left skeleton">
        <GameDetail title="" detail="" />
      </div>
      <div className="selected--right skeleton">
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
