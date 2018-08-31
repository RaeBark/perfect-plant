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
                console.log(plants);
            })
        }
    }


    render() {
        var plants;
        console.log(this.props.plants);
        console.log(this.state.plants);


        
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
            console.log(this.props.plants)
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





        // var plants = this.state.plants === 0 ? this.props.plants : this.state.plants;

        // if (this.state.plants === 0) {
        //     plants = this.props.plants;
        // } else {
        //     plants = this.state.plants;
        console.log(plants);

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