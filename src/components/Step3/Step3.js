import React from 'react';

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
            <h2>question 5 of 6: what maintenance level would your plant be?</h2>
            <div className="row">
                <div className="Step1-Hands col-md-4">
                    <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="Step1-Hands col-md-4">
                    <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                    <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="Step1-Hands col-md-4">
                    <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                    <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                    <img src="https://i.imgur.com/C58KDmg.png" alt="" style={{width:100, height:100}}/>
                </div>
                <label>low</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>medium</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>high</label>
            </div>
            


            <h2>question 6 of 6: how much sunlight exposure will your plant get?</h2>
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
                <label>almost none</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>a little/parsed</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label>a lot/direct</label>
            </div>
        </React.Fragment>
        )
    }
}

export default Step3;