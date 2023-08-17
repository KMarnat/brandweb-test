import classnames from 'classnames';

export function Metacritic({ selectedMetacritic }) {
  return (
    <div className="detail">
      <h2>Metacritic</h2>
      <span
        className={classnames({
          metacritic: true,
          high: selectedMetacritic >= 66,
          mid: selectedMetacritic < 66,
          low: selectedMetacritic < 33,
        })}
      >
        {selectedMetacritic}
      </span>
    </div>
  );
}
