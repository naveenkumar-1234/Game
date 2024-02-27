import React, { useState } from 'react';
import './RockPaper.css';

const RockPaper = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const playGame = (choice) => {
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    if (choice === computerChoice) {
      setResult('It\'s a tie!');
    } else if ((choice === 'rock' && computerChoice === 'scissors') ||
               (choice === 'paper' && computerChoice === 'rock') ||
               (choice === 'scissors' && computerChoice === 'paper')) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  const choices = ['rock', 'paper', 'scissors'];

  return (
    <div className="rock-paper-container" style={{ height: '100vh', width: '100vw' }}>
      <h2>Rock Paper Scissors</h2>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>{choice}</button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <p>Your choice: {userChoice}</p>
          <p>Computer's choice: {computerChoice}</p>
          <p>{result}</p>
          <button onClick={() => {
            setUserChoice(null);
            setComputerChoice(null);
            setResult(null);
          }}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default RockPaper;
