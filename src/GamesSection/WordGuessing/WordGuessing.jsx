import React, { Component } from 'react';
// import './styles.css';

function getWord() {
  const words = ['Ironman', 'Avengers', 'Spiderman', 'Captain', 'Marvel'];
  const randomIndex = Math.floor(Math.random() * words.length);
  console.log(words[randomIndex])
  return words[randomIndex];
}


function getRemainingGuess() {
  return 20;
}

class WordGuessing extends Component {
  state = {
    word: getWord().toLowerCase().split(''),
    originalWord: getWord().split(''),
    remainingGuesses: getRemainingGuess(),
    guessList: [],
    status: 'Playing',
  };

  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress);
  }

  setStatus = () => {
    const finished = this.state.word.every(letter =>
      this.state.guessList.includes(letter) || letter === ' '
    );

    let stateVal = '';
    if (this.state.remainingGuesses === 0) {
      stateVal = 'Failed';
    } else if (finished) {
      stateVal = 'Success';
    } else {
      stateVal = 'Playing';
    }

    this.setState({
      status: stateVal,
    });
  };

  getStatusMessage = () => {
    if (this.state.status === 'Playing') {
      return `Guesses Remaining: ${this.state.remainingGuesses}`;
    } else if (this.state.status === 'Failed') {
      return `Nice try, the word was ${this.state.originalWord.join('')}`;
    } else {
      return 'Great job! You guessed the word';
    }
  };

  hint = () => {
    if (this.state.status !== 'Playing') {
      return null;
    }
    return 'Hint: We love you 3000';
  };

  getPuzzle = () => {
    if (this.state.status !== 'Playing') {
      return null;
    }
    let puzzle = '';
    this.state.originalWord.forEach((letter) => {
      puzzle += (this.state.guessList.includes(letter.toLowerCase()) || letter === ' ')
        ? letter
        : '*';
    });
    return puzzle;
  };

  makeGuess = (letter) => {
    if (this.state.status !== 'Playing') {
      return;
    }
    const guessedAlready = this.state.guessList.includes(letter.toLowerCase());

    if (letter.length === 1 && letter !== ' ' && !guessedAlready) {
      const arr = [...this.state.guessList, letter.toLowerCase()];
      this.setState({
        guessList: arr,
        remainingGuesses: this.state.remainingGuesses - (this.state.word.includes(letter.toLowerCase()) ? 0 : 1)
      }, this.setStatus);
    }
  };

  handleKeyPress = (event) => {
    this.makeGuess(event.key);
  };

  render() {
    return (
      <div className="flex bg-gradient-to-tr from-pink-300 to-blue-300 flex-col items-center justify-center h-screen">
        <h1 className="text-3xl mb-4">{this.state.status === 'Playing' ? 'GUESS IT (Press any key)' : this.state.status === 'Success' ? 'YOU GUESSED IT!' : 'OH NO!'}</h1>
        <h3 className="text-xl mb-2">{this.hint()}</h3>
        <h3 className="text-2xl mb-2">{this.getPuzzle()}</h3>
        <h3 className="text-xl mb-4">{this.getStatusMessage()}</h3>
        {this.state.status !== 'Playing' &&
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            this.setState({
              word: getWord().toLowerCase().split(''),
              originalWord: getWord().split(''),
              remainingGuesses: getRemainingGuess(),
              guessList: [],
              status: 'Playing',
            });
          }}>
            Play Again
          </button>
        }
      </div>
    );
  }
}

export default WordGuessing;
