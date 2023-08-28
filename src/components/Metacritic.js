import classnames from 'classnames';

export function Metacritic({ selectedMetacritic }) {
  return (
    <div className="detail">
      <h2>Metacritic</h2>
      <span
        className={classnames({
          metacritic: true,
          'metacritic--high': selectedMetacritic >= 66,
          'metacritic--mid': selectedMetacritic < 66,
          'metacritic--low': selectedMetacritic < 33,
        })}
      >
        {selectedMetacritic}
      </span>
    </div>
  );
}
