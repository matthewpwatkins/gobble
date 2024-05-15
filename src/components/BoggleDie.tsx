import React from 'react';

interface BoggleDieProps {
  letter: string;
}

const BoggleDie: React.FC<BoggleDieProps> = ({ letter }) => {
  return (
    <div className="boggle-die">
      {letter}
    </div>
  );
}

export default BoggleDie;