import React, { useState, useEffect } from 'react';
import './MemoryCard.css';

const NUM_CARDS = 60;
const symbols = ['🌟', '🎈', '🎁', '🎉', '🎊', '🍰', '🍭', '🎮', '🎸', '📚']; 

function App() {
  const [cards, setCards] = useState([]);
  const [flippedIndices, setFlippedIndices] = useState([]);
  const [matchedIndices, setMatchedIndices] = useState([]);

  useEffect(() => {
    const initialCards = [];
    const usedSymbols = generateSymbolSequence();
    for (let i = 0; i < NUM_CARDS; i++) {
      initialCards.push({
        id: i,
        symbol: usedSymbols[i],
        flipped: false,
      });
    }
    setCards(shuffleArray(initialCards));
  }, []);

  const generateSymbolSequence = () => {
    let symbolSequence = [];
    for (let i = 0; i < NUM_CARDS / symbols.length; i++) {
      symbolSequence = symbolSequence.concat(symbols);
    }
    return symbolSequence;
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleCardClick = (index) => {
    if (flippedIndices.length === 2 || matchedIndices.includes(index)) return;

    const newCards = [...cards];
    newCards[index].flipped = true;

    if (flippedIndices.length === 1) {
      const firstIndex = flippedIndices[0];
      if (newCards[firstIndex].symbol === newCards[index].symbol) {
        setMatchedIndices([...matchedIndices, firstIndex, index]);
      } else {
        setTimeout(() => {
          newCards[firstIndex].flipped = false;
          newCards[index].flipped = false;
          setCards(newCards);
        }, 1000);
      }
      setFlippedIndices([]);
    } else {
      setFlippedIndices([index]);
    }

    setCards(newCards);
  };

  return (
    <div className="App">
      <h1 className='h1-title'>Memory Game</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.flipped ? 'flipped' : ''} ${matchedIndices.includes(index) ? 'matched' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {card.flipped || matchedIndices.includes(index) ? card.symbol : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
