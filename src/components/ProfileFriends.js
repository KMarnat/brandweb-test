import UserWithStatus from '../components/UserWithStatus.js';
import friends from '../friends.js';

export default function ProfileFriends() {
  return (
    <aside className="friends">
      <ul className="friends__list">
        {friends.map((friend) => (
          <li className="friend">
            <UserWithStatus source={friend.source} status={friend.status} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
