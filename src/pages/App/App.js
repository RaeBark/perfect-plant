import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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
import CheckoutPage from '../CheckoutPage/CheckoutPage';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      plants: [],
      allPlants: [],
      filteredPlants: [],
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
  
  handleRemoveItem = (plantId) => {
    console.log(plantId);
    plantAPI.removePlant(plantId)
      .then(cart => {
        this.setState({cart})
      });
  };

  handleFilteredPlants = () => {
    console.log('What up, G?');
  }
  /*---------- Lifecycle Methods ----------*/

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    plantAPI.index().then(plants => {
      this.setState({plants: plants, allPlants: plants});
    });
    if (user) {
      orderAPI.getCart()
        .then(cart => this.setState({ cart }));
    }
  }



  render() {
    console.log(this.state.allPlants)
    console.log(this.state.plants)
    console.log(this.state.filteredPlants)
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
                allPlants={this.state.allPlants}
                />
              }/>
              <Route exact path="/login" render={(props) => 
                <LoginPage 
                  message=""
                  {...props} 
                  handleLogin={this.handleLogin}
                />
              }/>
              <Route exact path="/signup" render={(props) => 
                <SignupPage {...props} 
                handleSignup={this.handleSignup}
                />
              }/>
              <Route exact path="/quiz" render={(props) => (
                userService.getUser() ?
                <QuizPage {...props}/>
                 :
                 <Redirect to={{pathname: '/login', message:"Please log in first!"}} />
              )

                
              }/>
              <Route exact path="/cart" render={(props) => (
                userService.getUser() ?
                <CartPage 
                  {...props}  
                  handleRemoveItem={this.handleRemoveItem}
                  handleAddItem={this.handleAddItem} 
                  user={this.state.user} 
                  cart={this.state.cart}
                />
                 :
                <Redirect to={{pathname: '/login', message:"Please log in first!"}}/>
              )   
              }/>
              <Route exact path="/saved_plants" render={(props) => (
                userService.getUser() ?
                <SavedPlants {...props} />
                 :
                <Redirect to={{pathname: '/login', message:"Please log in first!"}} />
              )
              }/>
              <Route exact path="/plants" render={(props) => (
                userService.getUser() ?
                <PlantsPage 
                  {...props} 
                  plants={this.state.plants}
                  handleAddItem={this.handleAddItem}
                  handleFilteredPlants={this.handleFilteredPlants}
                />
                 :
                <Redirect to={{pathname: '/login', message:"Please log in first!"}} />
              )    
              }/>
              <Route exact path="/checkout" render={() => (
                userService.getUser() ?
                <CheckoutPage/>
                 :
                <Redirect to={{pathname: '/login', message:"Please log in first!"}} />
              ) 
              }/>
            </Switch>
          </React.Fragment>
        </Router>

      </div>
    );
  }
}

export default App;
