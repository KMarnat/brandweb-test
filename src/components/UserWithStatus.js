export default function UserWithStatus({ source }) {
  return (
    <div className="feed__post-avatar feed__post-avatar--dot">
      <img src={source} alt="profile avatar" />
    </div>
  );
}
