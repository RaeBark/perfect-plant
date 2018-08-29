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
            <Link to='/quiz' className="Home-Quiz-Button">take the quiz</Link>
        </div>
    );
}

export default Home;