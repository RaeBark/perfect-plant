import React from 'react';
import './Step1.css'

class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        let clickedStyle = {
            boxShadow: '0 7px 1px -2px white',
            
        };
        return (
            <React.Fragment>
                <br/><br/><br/>
                <h2>question 1 of 6: what maintenance level would your plant be?</h2>
                <div>
                    <div className="Step1 row">
                        <div style={this.props.maintenance === "low" ? clickedStyle : null}  className="Step1-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('maintenance', 'low')}>
                            <img class="Option" src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/><br/>
                            <label>low</label>
                        </div>

                        <div style={this.props.maintenance === "medium" ? clickedStyle : null}  className="Step1-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('maintenance', 'medium')}>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/><br/>
                            <label>medium</label>
                        </div>

                        <div style={this.props.maintenance === "high" ? clickedStyle : null}  className="Step1-Options hvr-float-shadow col" onClick={() => this.props.handleSelection('maintenance', 'high')}>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/><br/>
                            <label>high</label>
                        </div>
                    </div>
                    </div>
                    <br/><br/><br/>
                <h2>question 2 of 6: how much sunlight exposure will your plant get?</h2>
                <div className="row">
                    <div style={this.props.sunlight === "none" ? clickedStyle : null} className="Step1-Options Sunlight hvr-float-shadow col" onClick={() => this.props.handleSelection('sunlight', 'none')}>
                        <img src="https://inspiredbusinessmedia.co.uk/wp-content/uploads/2016/03/cloud-icon-white.png" alt="" style={{width:100, height:100}}/><br/>
                        <label>almost none</label>
                    </div>
                    <div style={this.props.sunlight === "parsed" ? clickedStyle : null} className="Step1-Options Sunlight hvr-float-shadow col" onClick={() => this.props.handleSelection('sunlight', 'parsed')}>
                        <img src="https://flaticons.net/gd/makefg.php?i=icons/Mobile%20Application/Cloud-Sun.png&r=255&g=255&b=255" alt="" style={{width:100, height:100}}/><br/>
                        <label>a little/parsed</label>
                    </div>
                    <div style={this.props.sunlight === "direct" ? clickedStyle : null} className="Step1-Options Sunlight hvr-float-shadow col" onClick={() => this.props.handleSelection('sunlight', 'direct')}>
                        <img src="https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2017/06/sun-icon.png?ssl=1" alt="" style={{width:100, height:100}}/><br/>
                        <label>a lot/direct</label>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default Step1;