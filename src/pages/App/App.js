import React, { Component } from 'react';
import { 
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
import CartPage from '../CartPage/CartPage';
import SavedPlants from '../SavedPlants/SavedPlants';
import PlantsPage from '../PlantsPage/PlantsPage';
import plantAPI from '../../utils/plantAPI';
import orderAPI from '../../utils/orderAPI';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      plants: [],
      user: {},
      cart: null

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

  handleAddItem = (plantId) => {
    plantAPI.addPlant(plantId)
      .then(cart => {
        this.setState({cart})
      });
  };

  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    plantAPI.index().then(plants => {
      this.setState({plants});
    orderAPI.getCart()
      .then(cart => this.setState({ cart }))
      // console.log(this.state.plants);
    });
  }



  render() {
    return (
      <div className="App">
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
              <Route exact path="/cart" render={(props) => 
                <CartPage {...props}  handleAddItem={this.handleAddItem} user={this.state.user} cart={this.state.cart}
                />
              }/>
              <Route exact path="/saved_plants" render={(props) => 
                <SavedPlants {...props} 
                />
              }/>
              <Route exact path="/plants" render={(props) => 
                <PlantsPage 
                  {...props} 
                  plants={this.state.plants}
                  handleAddItem={this.handleAddItem}
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
