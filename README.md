
# Quiz-King

Quiz-King is a MERN (MongoDB, Express.js, React, Node.js) project that allows users to test their knowledge by participating in quizzes sourced from the Open Trivia Database via API. This app not only provides an entertaining way to learn new facts but also allows users to compete with their friends and keep track of their scores.

![Quiz-King Screenshot](./images/Screenshot%202023-09-24%20at%202.52.02%20PM.png)

## Features

- Quiz questions sourced from [Open Trivia Database](https://opentdb.com/) ✓
- User registration and authentication
- Score tracking and leaderboard to compete with friends ✓
- RESTful API for players and leaderboard data ✓
- MIT License ✓
- 3 Game Modes:
    - Miss 1
    - Miss 3
    - Topic of Choice
    
## Technologies Used

- MongoDB: A NoSQL database for storing player data and quiz information.
- Express.js: A web application framework for building robust APIs. 
- React: A JavaScript library for building user interfaces.
- Node.js: A server-side runtime environment for running JavaScript.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
    
## Play Now via Vercel 
- [Visit Quiz King](https://quiz-king.vercel.app/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/code-with-ryan/quiz-king.git
   cd quiz-king
   ```

2. Install dependencies for both the server and client:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies (from the project root directory)
   npm install
   ```

3. Set up the environment variables:

   - Coming Soon!

4. Start the development server:

   ```bash
   # Start the server (from the server directory)
   cd server
   node server.js

   # Start the client (from the project root directory)
   npm start
   ```

5. Your Quiz-King app should now be running at http://localhost:3001.

## API Endpoints

- `/api/data/players`: Get a list of all players.
- `/api/data/leaderboard`: Get the current leaderboard.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributions Welcome

We welcome contributions from the open-source community. If you'd like to contribute to Quiz-King, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, concise commit messages.
4. Push your branch to your fork.
5. Create a pull request to the `main` branch of this repository.

Thank you for helping make Quiz-King even better!

---

Happy quizzing with Quiz-King! 👑
