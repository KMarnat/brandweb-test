export function GameDetail({ title, detail, className }) {
  return (
    <div className="detail">
      <h2>{title}</h2>
      <p className={className}>{detail}</p>
    </div>
  );
}
