import React from 'react';
import ReactDOM from 'react-dom';

import BackButton from './BackButton.jsx';

import './styles/leaderboards.css';

const LeaderBoards = () => {
    return(
        <div className='leaderboard-container'>
            <BackButton back="/" />
            <h1> Leaderboards </h1>
            <table>
                <tr>
                    <th> Rank </th>
                    <th> Name </th>
                    <th> Highscore </th>
                </tr>
                <tr>
                    <th> 1 </th>
                    <th> Ryan </th>
                    <th> 15 </th>
                </tr>
                <tr>
                    <th> 2 </th>
                    <th> Not Ryan </th>
                    <th> 10 </th>
                </tr>
                <tr>
                    <th> 3 </th>
                    <th> Ryan Again </th>
                    <th> 7 </th>
                </tr>
            </table>
        </div>
        
    )
}

export default LeaderBoards;