import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Welcome from './components/Welcome.jsx'
import Game from './components/Game.jsx'
import About from './components/About.jsx'
import LeaderBoards from './components/Leaderboards.jsx'
import Score from './components/Score.jsx'
// Styles
import './index.css'
import Leaderboards from './components/Leaderboards.jsx'

export default function App(){
  return(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/play" element={<Game />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/score" element={<Score />} />
        {/* Add more routes as needed */}
      </Routes>
    </React.StrictMode>
  </Router>);
}
