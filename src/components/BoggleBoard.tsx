import React from 'react';
import BoggleDie from './BoggleDie';

const BoggleBoard: React.FC = () => {
  const dice = Array.from({ length: 25 }, (_, i) => <BoggleDie key={i} />);
  
  return (
    <div className="boggle-board">
      {dice}
    </div>
  );
}

export default BoggleBoard;