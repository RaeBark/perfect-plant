import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'


const Home = (props) => {
    props.clearSearchedFlag();
    return (
        <div className="Home">
            <div className="Home-Description">
            <br/><br/><br/>
                <h2>find the</h2>
                <h1 className="Home-Title">Perfect Plant</h1><br/>
                <h2>to suit your lifestyle</h2>
            </div>
            <br/>
            <br/>
            <br />
            <br />
            <br />
            <Link to='/quiz' className="Home-Quiz-Button">take the quiz</Link>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Link to={{pathname:'/plants', allPlants:props.allPlants}}>or browse all plants</Link>
        </div>
    );
}

export default Home;