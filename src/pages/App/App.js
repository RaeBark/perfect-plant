import React, { Component } from 'react';
import { 
  Link, 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import NavBar from '../../components/NavBar/NavBar';
import QuizPage from '../QuizPage/QuizPage';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

/*---------- Helper Methods ----------*/



  handleSignup = () => {
    this.setState({user : userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }


  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <NavBar 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
              />
            <Switch> 
              <Route exact path="/" render={() => 
                <Home 
                />
              }/>
              <Route exact path="/login" render={(props) => 
                <LoginPage 
                  {...props} 
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path="/signup" render={(props) => 
                <SignupPage {...props} 
                handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path="/quiz" render={(props) => 
                <QuizPage {...props} 
                />
              }/>
            </Switch>
          </React.Fragment>
        </Router>

      </div>
    );
  }
}

export default App;
