import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
        <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
              <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
              <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
              <Route path='/users' render={() => <UsersContainer/>}/>
              <Route path='/login' render={() => <Login/>}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);