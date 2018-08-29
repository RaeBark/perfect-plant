import React from 'react';

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
                    <div className="col-md-4">
                        
                        <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="col-md-4">
                        
                        <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                        <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="col-md-4">
                        
                        <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                        <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                        <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                    </div>
                    <label>almost never</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>once a week</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>every 2+ weeks</label>
                </div>
                    <h2>question 4 of 6: what size would you like your plant to be?</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://inspiredbusinessmedia.co.uk/wp-content/uploads/2016/03/cloud-icon-white.png" alt="" style={{width:100, height:100}}/>
                    </div>
                    <div className="col-md-4">
                        <img src="https://flaticons.net/gd/makefg.php?i=icons/Mobile%20Application/Cloud-Sun.png&r=255&g=255&b=255" alt="" style={{width:100, height:100}}/>
                    </div>
                    <div className="col-md-4">
                        <img src="https://i1.wp.com/thefrontline.org.uk/wp-content/uploads/2017/06/sun-icon.png?ssl=1" alt="" style={{width:100, height:100}}/>
                    </div>
                    <label>small</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>medium</label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>large</label>
                </div>
            </React.Fragment>
        )
    }
}

export default Step2;