import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let MainComponent = (props) => {
  const [currentSquare, setCurrentSquare] = useState(1);

  const handleDragStart = (e, square) => {
    e.dataTransfer.setData('square', square);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, square) => {
    const draggedSquare = e.dataTransfer.getData('square');
    if (draggedSquare) {
      setCurrentSquare(square);
    }
  };

  return (
    <div className="container">
      <div
        className={`square ${currentSquare === 1 ? 'occupied' : ''}`}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 1)}
      >
        {currentSquare === 1 && (
          <div
            className="circle"
            draggable
            onDragStart={(e) => handleDragStart(e, 1)}
          ></div>
        )}
      </div>
      <div
        className={`square ${currentSquare === 2 ? 'occupied' : ''}`}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, 2)}
      >
        {currentSquare === 2 && (
          <div
            className="circle"
            draggable
            onDragStart={(e) => handleDragStart(e, 2)}
          ></div>
        )}
      </div>
    </div>
  );
}


root.render(<MainComponent />);