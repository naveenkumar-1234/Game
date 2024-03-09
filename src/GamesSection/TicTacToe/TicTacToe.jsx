import React, { useState, useEffect } from 'react';
import './styles.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (currentPlayer === 'O' && !winner) {
      const emptyCells = board.reduce((acc, cell, index) => {
        if (!cell) {
          acc.push(index);
        }
        return acc;
      }, []);

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const computerMove = emptyCells[randomIndex];

      const newBoard = [...board];
      newBoard[computerMove] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
      setCurrentPlayer('X');
    }
  }, [board, currentPlayer, winner]);

  const handleClick = (index) => {
    if (!board[index] && !winner && currentPlayer === 'X') {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
      setCurrentPlayer('O');
    }
  };

  const checkWinner = (board) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes(null)) {
      setWinner('Draw');
    }
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="game">
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="square-container">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? (
          winner === 'Draw' ? (
            <p>It's a Draw!</p>
          ) : (
            <p>{winner} Wins!</p>
          )
        ) : (
          <p>Next Player: {currentPlayer}</p>
        )}
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default TicTacToe;
