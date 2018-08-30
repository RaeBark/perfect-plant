import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'


const Home = (props) => {
    return (
        <div className="Home">
            <div className="Home-Description">
                <h2>find the</h2>
                <h1 className="Home-Title">Perfect Plant</h1>
                <h2>to suite your lifestyle</h2>
            </div>
            <br />
            <br />
            <br />
            <Link to='/quiz' className="Home-Quiz-Button">take the quiz</Link><br/><br/>
            <img src="http://www.barborenovables.es/images/plant12.png" alt="logo" style={{height: 400, width:400}}></img><br/>
            <Link to='/plants'>or browse all plants</Link>
        </div>
    );
}

export default Home;