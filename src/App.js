import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './App.scss';
import 'swiper/swiper.scss'
import Modal from 'react-modal'
import React from 'react';
import { useCurrentUserActions } from './store/current-user-slice/useCurrentUserActions'

function App() {
  const { fetchCurrentUser } = useCurrentUserActions()
  React.useEffect(() => {
    Modal.setAppElement('body');
    //dispatch(fetchCurrentUser().then( () => dispatch() ))
  }, [])
  return (
      <div className={window.localStorage.getItem('theme') === 'dark' ? 'App dark-theme' : 'App'}>
        <Router>
            <Switch>
              <Route path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
