const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build'))); //if request URL is in this directory, serve it.
//TODO: Leverage MongoDB and Mongoose to serve real backend data.
app.get('/api/data/leaderboards', (req, res) => {
  res.json({ message: {
    "leaderboards" : [
      {
        "name" : "Player 1",
        "highestScore" : 150
      }
    ]
  } });
});
app.get('/api/data/players', (req,res) => {
  res.json({ message : {
    "players": [
      {
        "name": "Player 1",
        "gamesPlayed": 10,
        "highestScore": 150
      },
      {
        "name": "Player 2",
        "gamesPlayed": 8,
        "highestScore": 180
      },
      {
        "name": "Player 3",
        "gamesPlayed": 12,
        "highestScore": 130
      },
      {
        "name": "Player 4",
        "gamesPlayed": 15,
        "highestScore": 200
      }
    ]
  }}
  );  
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
