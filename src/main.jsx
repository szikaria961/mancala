import React, { useState } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import { getUpdatedBoard } from './helpers'

const initialGameState = [
  {
    type: 'mancala',
    seedCount: 0
  },
  {
    type: 'pit',
    seedCount: 4
  },
  {
    type: 'pit',
    seedCount: 4
  },
  {
    type: 'mancala',
    seedCount: 0
  },
  {
    type: 'pit',
    seedCount: 4
  },
  {
    type: 'pit',
    seedCount: 4
  }
];

const App = () => {
  const [gameState, setGameState] = useState(initialGameState);

  const handleClick = index => {
    let updatedState = [...gameState];

    updatedState = getUpdatedBoard(updatedState, index);

    setGameState(updatedState);
  }

  return (
    <div>
      <h1>Mancala</h1>
      <div>
        {gameState.map(({ seedCount, type }, index) => {
          return (
            <div onClick={() => { handleClick(index); }}>{seedCount} {type}</div>
          );
        })}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
