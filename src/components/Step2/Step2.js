import React from 'react';
import './Step2.css';


class Step2 extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }



    render() {
        return (
            <React.Fragment>
                <h1>Step 2</h1>
                <h2>question 3 of 6: how often do you want to water your plant?</h2>
                <div className="row">
                    <div className="Step2-Options col-md-4" onClick={() => this.props.handleSelection('moisture', 'low')}>
                        
                        <img  src="https://uploads-ssl.webflow.com/5b12fa7893e3456284a17faa/5b12fa7893e345c34da18009_water-drop.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="Step2-Options col-md-4" onClick={() => this.props.handleSelection('moisture', 'medium')}>
                        
                        <img src="https://uploads-ssl.webflow.com/5b12fa7893e3456284a17faa/5b12fa7893e345c34da18009_water-drop.png" alt="" style={{width:100, height:100}}/>
                        <img src="https://uploads-ssl.webflow.com/5b12fa7893e3456284a17faa/5b12fa7893e345c34da18009_water-drop.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="Step2-Options col-md-4" onClick={() => this.props.handleSelection('moisture', 'high')}>
                        
                        <img src="https://uploads-ssl.webflow.com/5b12fa7893e3456284a17faa/5b12fa7893e345c34da18009_water-drop.png" alt="" style={{width:100, height:100}}/>
                        <img src="https://uploads-ssl.webflow.com/5b12fa7893e3456284a17faa/5b12fa7893e345c34da18009_water-drop.png" alt="" style={{width:100, height:100}}/>
                        <img src="https://uploads-ssl.webflow.com/5b12fa7893e3456284a17faa/5b12fa7893e345c34da18009_water-drop.png" alt="" style={{width:100, height:100}}/>
                    </div>
                    <label>almost never</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>every 2 weeks</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>once or more a week</label>
                </div>
                    <h2>question 4 of 6: what is the humidty like where you live?</h2>
                <div className="row">
                    <div className="Step2-Options col-md-4" onClick={() => this.props.handleSelection('humidity', 'dry')}>
                        <img src="https://www.spreadshirt.com/image-server/v1/mp/designs/1010503621,width=178,height=178/white-cactus.png" alt="" style={{width:100, height:100}}/>
                    </div>
                    <div className="Step2-Options col-md-4" onClick={() => this.props.handleSelection('humidity', 'normal')}>
                        <img src="http://bikeshelters.com/img/tree_icon.png" alt="" style={{width:100, height:100}}/>
                    </div>
                    <div className="Step2-Options col-md-4" onClick={() => this.props.handleSelection('humidity', 'humid')}>
                        <img src="https://flaticons.net/icons/Miscellaneous/Palm-Tree.png" alt="" style={{width:100, height:100}}/>
                    </div>
                    <label>dry as a desert</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>normal</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>humid as heck</label>
                </div>
            </React.Fragment>
        )
    }
}

export default Step2;