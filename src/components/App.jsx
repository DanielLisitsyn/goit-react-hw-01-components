import { Profile } from './Profile/Profile';
import userData from '../data/user.json';

import { Statistics } from './Statistics/Statistics';
import statsData from '../data/datastats.json';

import { FriendList } from './FriendList/FriendList';
import friendsData from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      {/* <Statistics stats={statsData} /> */}
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
