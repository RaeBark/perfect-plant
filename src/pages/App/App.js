import React, { Component } from 'react';
import { 
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
import ShowPlantPage from '../ShowPlantPage/ShowPlantPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPlants: [],
      filteredPlants: [],
      searched: false,
      user: {},
      cart: null,
      plant: ''
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
    plantAPI.removePlant(plantId)
      .then(cart => {
        this.setState({cart})
      });
  };

  handleFilteredPlants = (plants) => {
    this.setState({filteredPlants: plants, searched: true}, function() {
      this.props.history.push('/plants');
    });
  }

  handleSelectedPlant = (plant) => {
    this.setState({plant});
    this.props.history.push(`/plants/${plant._id}`);
  }
 
  clearSearchedFlag = () => {
    if (this.state.searched) this.setState({searched: false});
  }

  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
    plantAPI.index().then(plants => {
      this.setState({allPlants: plants});
    });
    if (user) {
      orderAPI.getCart()
        .then(cart => this.setState({ cart }));
    }
  }

  render() {

    return (
      <div className="App">
            <NavBar 
                  user={this.state.user}
                  handleLogout={this.handleLogout}
              />
            <Switch> 
              <Route exact path="/" render={() => 
                <Home 
                  clearSearchedFlag={this.clearSearchedFlag}
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
                <QuizPage {...props}
                  handleFilteredPlants={this.handleFilteredPlants}/>
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
                  searched={this.state.searched}
                  filteredPlants={this.state.filteredPlants}
                  allPlants={this.state.allPlants}
                  handleAddItem={this.handleAddItem}
                  handleSelectedPlant={this.handleSelectedPlant}
                  plant={this.state.plant}
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
              <Route path="/plants/:id" render={(props) => (
                userService.getUser() ?
                <ShowPlantPage {...props}
                plant={this.state.plant}
                handleAddItem={this.handleAddItem}/>
                
                 :
                <Redirect to={{pathname: '/login', message:"Please log in first!"}} />
              ) 
              }/>
            </Switch>
      </div>
    );
  }
}

export default App;
