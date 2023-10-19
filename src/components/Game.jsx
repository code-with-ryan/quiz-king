import React, { useState, useEffect } from "react";
import './styles/game.css'
import BackButton from './BackButton.jsx'

//TODO: Figure out question parsing response oddities: ex) Brothers &amp; cousins etc...
function Game() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&encode=base64")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, []);

  let evaluateAnswer = (correct) => {
    if(correct){
      setScore((previousScore) => previousScore + 1)
      console.log(score)
    }
    setQuestionIndex((previousIndex) => previousIndex + 1)
  }

  let renderQuestion = (questionIndex) => {
    const currentQuestion = questions[questionIndex];
  
    // Map the incorrect answers to buttons
    const incorrectAnswers = currentQuestion.incorrect_answers.map(answer => (
      <button key={answer} onClick={() => evaluateAnswer(false)}>{atob(answer)}</button>
    ));
  
    // Create a button for the correct answer
    const correctAnswer = (
      <button key={currentQuestion.correct_answer} onClick={() => evaluateAnswer(true)}>
        {atob(currentQuestion.correct_answer)}
      </button>
    );
  
    // Combine correct and incorrect answers, then shuffle them
    let allAnswers = incorrectAnswers.concat(correctAnswer);
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
  
    return allAnswers;
  }
  
  return (
    <div className="game-container">
      <BackButton back='/'/>
      <p className="score"> Score: {score} </p>
        {questions.length > 0 && (
          <div>
            <p>Question {questionIndex+1} of {questions.length} </p>
            <h2>{atob(questions[questionIndex].question)}</h2>
              {renderQuestion(questionIndex)}
          </div>
        )}
    </div>
  );
}

export default Game;
