import React from 'react';
import './Step1.css'

class Step1 extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <React.Fragment>
                <h1>Step 1</h1>
                <h2>question 1 of 6: what maintenance level would your plant be?</h2>
                <div>
                    <div className="Step1 row">
                        <div className="Step1-Options col-md-4" onClick={() => this.props.handleSelection('maintenance', 'low')}>
                            <img class="Option" src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="Step1-Options col-md-4" onClick={() => this.props.handleSelection('maintenance', 'medium')}>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="Step1-Options col-md-4" onClick={() => this.props.handleSelection('maintenance', 'high')}>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                            <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                            <img src="https://www.idahofootandankle.com/sbtemplates/sbcommon/images/icons/Podiatry/Podiatry_White.png" alt="" style={{width:100, height:100}}/>
                        </div>
                    </div>
                        <div>
                            <label>low</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>medium</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>high</label>
                        </div>
                    </div>
                


                <h2>question 2 of 6: how much sunlight exposure will your plant get?</h2>
                <div className="row">
                    <div className="Step1-Options col-md-4" onClick={() => this.props.handleSelection('sunlight', 'none')}>
                        <img src="https://inspiredbusinessmedia.co.uk/wp-content/uploads/2016/03/cloud-icon-white.png" alt="" style={{width:100, height:100}}/>
                    </div>
                    <div className="Step1-Options col-md-4" onClick={() => this.props.handleSelection('sunlight', 'parsed')}>
                        <img src="https://flaticons.net/gd/makefg.php?i=icons/Mobile%20Application/Cloud-Sun.png&r=255&g=255&b=255" alt="" style={{width:100, height:100}}/>
                    </div>
                    <div className="Step1-Options col-md-4" onClick={() => this.props.handleSelection('sunlight', 'direct')}>
                        <img src="https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2017/06/sun-icon.png?ssl=1" alt="" style={{width:100, height:100}}/>
                    </div>
                    <label>almost none</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>a little/parsed</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>a lot/direct</label>
                </div>
            </React.Fragment>
            
        )
    }
}

export default Step1;