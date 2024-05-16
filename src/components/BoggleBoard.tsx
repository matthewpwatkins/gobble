import React from 'react';
import BoggleDie from './BoggleDie';
import diceLetters from '../dice.json';

const BoggleBoard: React.FC = () => {
  const getNextDieLetter = (dice: string[][]) => {
    const randomIndex = Math.floor(Math.random() * dice.length);
    const randomDie = dice.splice(randomIndex, 1)[0];
    const randomLetter = randomDie[Math.floor(Math.random() * randomDie.length)];
    return randomLetter;
  };

  let diceClone = [...diceLetters];
  const dice = Array.from({ length: 25 }, (_, i) => <BoggleDie key={i} letter={getNextDieLetter(diceClone)} />);
  
  return (
    <div className="boggle-board">
      {dice}
    </div>
  );
}

export default BoggleBoard;