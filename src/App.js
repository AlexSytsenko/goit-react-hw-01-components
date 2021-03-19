import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

function App() {
  return (

  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      avatar={user.avatar}
      location={user.location}
      stats={user.stats}
    />
    
    <Statistics 
      title = "Upload stats"
      stats = { statisticalData }
    />
      
    <FriendList
      friends={friends}
    />
      
  </div>
      

  )
}

export default App;
