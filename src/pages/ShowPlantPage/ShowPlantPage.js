import React from 'react';
import './ShowPlantPage.css'

class ShowPlantPage extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="ShowPlantPage">
                <h1>{this.props.plant.name}</h1>
                <img src={`${this.props.plant.plantImage}`} alt="" style={{height: 300, width: 250}}></img>
                <h3>$ {this.props.plant.price}</h3>
                <h3>{this.props.plant.scientificName}</h3>
                <h4>Plant Origins: {this.props.plant.plantOrigins}</h4><br/>
                <div className="ShowPlantPage-description">
                    <h5>{this.props.plant.description}</h5>
                </div><br/>
                <button className="btn-sm" onClick={(props) => this.props.handleAddItem(this.props.plant._id)}>add me to cart!</button>
            </div>

        )
    }
}

export default ShowPlantPage;

