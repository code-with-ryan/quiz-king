import React from "react";
import { Link } from "react-router-dom";
// assets 
import king from './assets/king.png'
// styles
import './styles/welcome.css'

const Welcome = () => {
    return(
        <div className='welcome-container'>
            <img src={king} height={180} alt="King"/>
            <h1> Quiz King </h1>
            <p> Commit some regicide by beating your friends' high score! <br/> Are you up for the challenge?</p>
            <Link className="drem" to="/play"> Play Now </Link>
            <br />
            <Link className="drem" to="/leaderboards"> Leaderboards </Link>
        </div>
    )
}

export default Welcome;
