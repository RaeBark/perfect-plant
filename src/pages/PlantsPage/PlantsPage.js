import React from 'react';
import Plant from '../../components/Plant/Plant';
import './PlantsPage.css';

class PlantsPage extends React.Component {

    render() {
        console.log('filtered plants: ', this.props.filteredPlants);
        console.log('allPlants: ', this.props.allPlants)
        var plants = this.props.searched ? this.props.filteredPlants : this.props.allPlants;
        var viewPlants = plants.map(plant => {
            return ( 
                <Plant
                    key={plant._id}
                    {...this.props} 
                    plant={plant}
                    handleAddItem={this.props.handleAddItem}
                    handleSelectedPlant={this.props.handleSelectedPlant}
                /> 
            );
        })

        return (
            <div className="PlantsPage">
                <h1>Look at all those plants!</h1>
                <div className="PlantsPage-Plants">
                    {this.props.searched && !this.props.filteredPlants.length ? 
                        <h1>No plants match your search</h1>
                    : 
                        <React.Fragment>
                            {viewPlants}
                        </React.Fragment>
                    }
                </div>
            </div>
        )
    }
}

export default PlantsPage;