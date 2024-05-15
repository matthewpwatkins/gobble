import React from 'react';
import BoggleDie from './BoggleDie';
import diceLetters from '../dice.json';

const BoggleBoard: React.FC = () => {
  const getRandomDie = () => {
    const randomIndex = Math.floor(Math.random() * diceLetters.length);
    const randomDie = diceLetters[randomIndex];
    const randomLetter = randomDie[Math.floor(Math.random() * randomDie.length)];
    return randomLetter;
  };

  const dice = Array.from({ length: 25 }, (_, i) => <BoggleDie key={i} letter={getRandomDie()} />);
  
  return (
    <div className="boggle-board">
      {dice}
    </div>
  );
}

export default BoggleBoard;