import React from 'react';
import './Step3.css'

class Step3 extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <React.Fragment>
            <h1>Step 3</h1>
            <h2>question 5 of 6: what size plant do you want?</h2>
            <div className="row">
                <div className="Step3-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('size', 'small')}>
                    <img src="https://i.imgur.com/NH9FtGH.png" alt="" style={{width:100, height:100}}/><br/>
                    <label>small</label>
                </div>
                <div className="Step3-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('size', 'medium')}>
                    <img src="https://toolkit.climate.gov/sites/default/files/ecosystem_icon.png" alt="" style={{width:100, height:100}}/><br/>
                    <label>medium</label>
                </div>
                <div className="Step3-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('size', 'large')}>
                    <img src="https://www.corkyogis.com/wp-content/uploads/2014/01/White-Tree-300x285.png" alt="" style={{width:100, height:100}}/><br/>
                    <label>large</label>
                </div>
            </div>
            


            <h2>question 6 of 6: what is your plant care level of expertise?</h2>
            <div className="row">
                <div className="Step3-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('expertiseLevel', 'beginner')}>
                    <img src="http://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png" alt="" style={{width:100, height:100}}/><br/>
                    <label>beginner like Bulbasaur</label>
                </div>
                <div className="Step3-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('expertiseLevel', 'intermediate')}>
                    <img src="https://cdn.staticneo.com/w/pokemon/8/86/Ivysaur.png" alt="" style={{width:100, height:100}}/><br/>
                    <label>intermediate like Ivysaur</label>
                </div>
                <div className="Step3-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('expertiseLevel', 'expert')}>
                    <img src="https://i.imgur.com/gMezQYK.png" alt="" style={{width:100, height:100}}/><br/>
                    <label>virtuoso like Venusaour</label>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Step3;