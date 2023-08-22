import { useState } from 'react';
import { GameDetail } from './GameDetail';
import { Metacritic } from './Metacritic';
import { SkeletonSelect } from './SkeletonSelect';

export function SelectedGame({
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
  const [isExpanded, setIsExpanded] = useState(false);
  const englishAbout = selectedDesc?.slice(0, selectedDesc.indexOf('Español'));

  function toggleExpanded() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  return (
    <article className="selected">
      {isLoading ? (
        <SkeletonSelect />
      ) : (
        <>
          <div className="selected__left">
            <img src={selectedImg} className="cover" alt="game poster" />
            <h1>{selectedName}</h1>
            <div className="detail">
              <h2>About</h2>
              <p className="about">
                {isExpanded
                  ? englishAbout
                  : englishAbout?.split(' ').slice(0, 30).join(' ') + '...'}
              </p>
              <button onClick={toggleExpanded}>
                {isExpanded ? 'Show less...' : 'Show more...'}
              </button>
            </div>
          </div>
          <div className="selected__right">
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
