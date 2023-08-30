import ProfileCard from './ProfileCard.js';
import ProfileFeed from './ProfileFeed.js';
import ProfileFriends from './ProfileFriends.js';

export default function ProfilePage() {
  return (
    <div className="profile">
      <ProfileCard />
      <ProfileFeed />
      <ProfileFriends />
    </div>
  );
}
