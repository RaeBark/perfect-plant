import React from 'react';
import Plant from '../../components/Plant/Plant';
import './PlantsPage.css';


class PlantsPage extends React.Component {
    render() {
        return (
            <div className="PlantsPage">
                <h1>Look at all those plants!</h1>
                <div className="PlantsPage-Plants"> 
                    {this.props.plants.map((plant) => {
                        return (
                            <Plant 
                                {...this.props} 
                                plant={plant}
                                handleAddItem={this.props.handleAddItem}
                            /> 
                        );
                    })
                    }
                </div>
            </div>
        )
    }
}

export default PlantsPage;