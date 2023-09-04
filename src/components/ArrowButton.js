export function ArrowButton({ children, onClick }) {
  return (
    <button onClick={onClick} className="arrow-btn">
      {children}
    </button>
  );
}
