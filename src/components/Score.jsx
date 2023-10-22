import { useLocation } from 'react-router-dom';

function Score() {
  const location = useLocation();
  const score = location.state ? location.state.score : 0;

  return (
    <div id="score-container">
      <h4>Congrats King! You scored {score}</h4>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Score;
