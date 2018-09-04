import React from 'react';
import './Plant.css';

class Plant extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div className="Plant">
                <h1>{this.props.plant.name}</h1>
                <img src={`${this.props.plant.plantImage}`} alt="" style={{height: 200, width: 150}}></img><br/><br/>
                <p>Price: ${this.props.plant.price}</p>
                <button className="Plant-Details-Button"onClick={() => this.props.handleSelectedPlant(this.props.plant)}>see more details</button><br/><br />
                <button className="Plant-Cart-Button btn-sm" onClick={(props) => this.props.handleAddItem(this.props.plant._id)}>add me to cart!</button>
            </div>
        )
    }
}

export default Plant;