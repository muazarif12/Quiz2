import { NotificationContainer } from 'react-notifications';
import { useSelector } from 'react-redux';
import UserPage from './components/userPage';
import AuthPage from './components/authPage';
function App() {
  const {loggedIn} = useSelector((state) => state.user);
  
  return (
    <div className="App">
      {loggedIn ? <UserPage /> : <AuthPage />}      
      <NotificationContainer />
      </div>
  );
}

export default App;
