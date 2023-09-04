export default function UserWithStatus({ source, status }) {
  return (
    <div
      className={
        status
          ? 'profile__status profile__status--online'
          : 'profile__status profile__status--offline'
      }
    >
      <img src={source} alt="profile avatar" />
    </div>
  );
}
