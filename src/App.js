import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './App.scss';
import 'swiper/swiper.scss'
import Modal from 'react-modal'
import React from 'react';
import { useCurrentUserActions } from './store/current-user-slice/useCurrentUserActions'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

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
              <Route exact path="/" component={Home}/>
              <Route exact path="/profile" component={Profile}/>
              <Redirect to='/'/>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
