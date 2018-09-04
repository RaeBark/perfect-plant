import React from 'react';
import Plant from '../../components/Plant/Plant';
import './PlantsPage.css';
import { Link } from 'react-router-dom';

class PlantsPage extends React.Component {

    render() {
        console.log('filtered plants: ', this.props.filteredPlants);
        console.log('allPlants: ', this.props.allPlants)
        var plants = this.props.searched ? this.props.filteredPlants : this.props.allPlants;
        var viewPlants = plants.map(plant => {
            return ( 
                <React.Fragment>
                    <Plant
                        key={plant._id}
                        {...this.props} 
                        plant={plant}
                        handleAddItem={this.props.handleAddItem}
                        handleSelectedPlant={this.props.handleSelectedPlant}
                    /> 
                </React.Fragment>
            );
        })

        return (
            <div className="PlantsPage">
                <div className="PlantsPage-Plants">
                    {this.props.searched && !this.props.filteredPlants.length ? 
                        <div className="PlantsPage-NoPlants">
                            <h1>No plants match your search...</h1>
                            <h2><Link to="/">browse all plants or take the quiz again</Link></h2>
                        </div>
                    : 
                        <React.Fragment>
                            {viewPlants}
                            <br/><br/>
                            <div classNAme="PlantsPage-Link">
                                <h2><Link to="/">browse all plants or take the quiz again</Link></h2>
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}

export default PlantsPage;