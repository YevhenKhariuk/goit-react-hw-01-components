import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import user from 'components/Profile/user.json';

const { username, tag, location, avatar, stats } = user;
const { followers, views, likes } = stats;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <FriendList friends={friends} />
    </>
  );
};
