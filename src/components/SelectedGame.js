import { GameDetail } from './GameDetail';
import { Metacritic } from './Metacritic';
import { SkeletonSelect } from './SkeletonSelect';

export function SelectedGame({
  selectedId,
  selectedName,
  selectedImg,
  selectedDevs,
  selectedDesc,
  selectedRelease,
  selectedRating,
  selectedPublishers,
  selectedPlatforms,
  selectedGenres,
  selectedMetacritic,
  isLoading,
}) {
  return (
    <article className="selected">
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <>
          <div className="selected--left">
            <img src={selectedImg} className="cover" alt="game poster" />
            <h1>{selectedName}</h1>
            <GameDetail
              title="About"
              detail={selectedDesc?.slice(0, selectedDesc.indexOf('Español'))}
            />
          </div>
          <div className="selected--right">
            <GameDetail title="Released" detail={selectedRelease} />
            <GameDetail
              title="Platforms"
              detail={selectedPlatforms?.map((plat, i) => (
                <span key={i}>
                  {plat.platform.name} {i !== selectedPlatforms.length - 1 && ' | '}
                </span>
              ))}
            />

            <GameDetail
              title="Developers"
              detail={selectedDevs?.map((dev, i) => (
                <span key={dev.id}>
                  {dev.name} {i !== selectedDevs.length - 1 && ' | '}
                </span>
              ))}
            />
            <GameDetail
              title="Publishers"
              detail={selectedPublishers?.map((publisher, i) => (
                <span key={publisher.id}>
                  {publisher.name} {i !== selectedPublishers.length - 1 && ' | '}
                </span>
              ))}
            />
            <GameDetail
              title="Genres"
              detail={selectedGenres?.map((genre, i) => (
                <span key={genre.id}>
                  {genre.name} {i !== selectedGenres.length - 1 && ' | '}
                </span>
              ))}
            />
            <GameDetail title="Rating" detail={selectedRating + '/5'} />
            {selectedMetacritic && <Metacritic selectedMetacritic={selectedMetacritic} />}
          </div>
        </>
      )}
    </article>
  );
}
