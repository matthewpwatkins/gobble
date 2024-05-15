import React from 'react';
import './App.css';

const App: React.FC = () => {
  const grid = Array.from({ length: 5 }, (_, i) => Array(5).fill(i));

  return (
    <div className="container">
      <div className="grid">
        {grid.map((row, i) =>
          row.map((_, j) => <div key={`${i}-${j}`} className="grid-item">A</div>)
        )}
      </div>
    </div>
  );
};

export default App;