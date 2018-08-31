import React from 'react';
import './Plant.css';
import { Link } from 'react-router-dom';

class Plant extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div className="Plant">
                <h1>{this.props.plant.name}</h1>
                <img src={`${this.props.plant.plantImage}`} alt="" style={{height: 100, width: 100}}></img>
                <h2>{this.props.plant.description}</h2>
                <h4>{this.props.plant.scientificName}</h4>
                <button onClick={() => this.props.handleSelectedPlant(this.props.plant)}>see more details</button>
                
                <p>Price: ${this.props.plant.price}</p>
                <button className="btn-sm btn-primary" onClick={(props) => this.props.handleAddItem(this.props.plant._id)}>add me to cart!</button>
            </div>
        )
    }
}

export default Plant; 