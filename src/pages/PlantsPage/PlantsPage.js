import React from 'react';
import Plant from '../../components/Plant/Plant';
import './PlantsPage.css';
import plantAPI from '../../utils/plantAPI'


class PlantsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            plants: [],
            filter: false
        }
    }

    componentDidMount = () => {
        if (this.props.location.state) {
            let queryString = {
                maintenance: this.props.location.state.maintenance,
                sunlight: this.props.location.state.sunlight,
                moisture: this.props.location.state.moisture,
                humidity: this.props.location.state.humidity,
                size: this.props.location.state.size,
                expertiseLevel: this.props.location.state.expertiseLevel
            }
            plantAPI.matchPlants(queryString).then(plants => {
                this.setState({plants: plants, filter: true});
                this.props.handleFilteredPlants();
            })
        }
    }


    render() {
        console.log(this.props.location.allPlants)
        var plants;
        
        if (this.state.filter) {
            plants = this.state.plants.map(plant => {
                return ( 
                    <Plant 
                        {...this.props} 
                        plant={plant}
                        handleAddItem={this.props.handleAddItem}
                    /> 
                );
            })
        } else {
            plants = this.props.plants.map(plant => {
                return (
                    <Plant 
                        {...this.props} 
                        plant={plant}
                        handleAddItem={this.props.handleAddItem}
                    /> 
                );
            })
        }

        return (
            <div className="PlantsPage">
                <h1>Look at all those plants!</h1>
                <div className="PlantsPage-Plants"> 
                    {plants}
                </div>
            </div>
        )
    }
}

export default PlantsPage;