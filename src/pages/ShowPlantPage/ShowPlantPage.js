import React from 'react';

class ShowPlantPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <h1>Show Plant Page</h1>
                <h1>{this.props.plant.name}</h1>
                <img src={`${this.props.plant.plantImage}`} alt="" style={{height: 100, width: 100}}></img>
                <h2>{this.props.plant.description}</h2>
                <h4>{this.props.plant.scientificName}</h4>
                <button className="btn-sm btn-primary" onClick={(props) => this.props.handleAddItem(this.props.plant._id)}>add me to cart!</button>
            </React.Fragment>

        )
    }
}

export default ShowPlantPage;

