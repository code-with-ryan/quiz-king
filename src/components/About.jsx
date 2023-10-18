import React from "react";
import ReactDOM from 'react-dom'

import './styles/about.css'

import BackButton from "./BackButton";

const About = () => {
    return(
    <div className="about-container">
    <BackButton back="/" />
    <header>
        <h3>About Quiz King</h3>
    </header>
    
    <main>
        <section id="features">
            <h2>Key Features</h2>
            <ul>
                <li>Wide range of quiz categories</li>
                <li>Leaderboard to track your progress using MongoDB</li>
                <li>Access to a vast collection of questions from Open Trivia DB via an API call</li>
                <li>Responsive design for seamless mobile and desktop use</li>
            </ul>
        </section>
    </main>
    </div>
    )
};

export default About;