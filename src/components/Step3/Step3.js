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
                <div className="Step3-Options hvr-float-shadow col-md-4" onClick={() => this.props.handleSelection('size', 'small')}>
                    <img src="https://i.imgur.com/NH9FtGH.png" alt="" style={{width:100, height:100}}/>
                </div>
                <div className="Step3-Options hvr-float-shadow col-md-4" onClick={() => this.props.handleSelection('size', 'medium')}>
                    <img src="https://toolkit.climate.gov/sites/default/files/ecosystem_icon.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="Step3-Options hvr-float-shadow col-md-4" onClick={() => this.props.handleSelection('size', 'large')}>
                    <img src="https://www.corkyogis.com/wp-content/uploads/2014/01/White-Tree-300x285.png" alt="" style={{width:100, height:100}}/>
                </div>
                <label>small</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>medium</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>large</label>
            </div>
            


            <h2>question 6 of 6: what is your plant care level of expertise?</h2>
            <div className="row">
                <div className="Step3-Options hvr-float-shadow col-md-4" onClick={() => this.props.handleSelection('expertiseLevel', 'beginner')}>
                    <img src="http://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png" alt="" style={{width:100, height:100}}/>
                </div>
                <div className="Step3-Options hvr-float-shadow col-md-4" onClick={() => this.props.handleSelection('expertiseLevel', 'intermediate')}>
                    <img src="https://cdn.staticneo.com/w/pokemon/8/86/Ivysaur.png" alt="" style={{width:100, height:100}}/>
                </div>
                <div className="Step3-Options hvr-float-shadow col-md-4" onClick={() => this.props.handleSelection('expertiseLevel', 'expert')}>
                    <img src="https://i.imgur.com/gMezQYK.png" alt="" style={{width:100, height:100}}/>
                </div>
                <label>beginner like Bulbasaur</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>intermediate like Ivysaur</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>virtuoso like Venusaour</label>
            </div>
        </React.Fragment>
        )
    }
}

export default Step3;