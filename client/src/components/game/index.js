import './index.css';
const Tetris = require('react-tetris');

const GameComp = () => (
  <div>
    <h1>Tetris</h1>
    <Tetris
      keyboardControls={{
        a: 'MOVE_DOWN',
        left: 'MOVE_LEFT',
        right: 'MOVE_RIGHT',
        space: 'HARD_DROP',
        z: 'FLIP_COUNTERCLOCKWISE',
        x: 'FLIP_CLOCKWISE',
        up: 'FLIP_CLOCKWISE',
        p: 'TOGGLE_PAUSE',
        c: 'HOLD',
        shift: 'HOLD',
      }}>
      {({
        HeldPiece,
        Gameboard,
        PieceQueue,
        points,
        linesCleared,
        state,
        controller,
      }) => (
        <div>
          <HeldPiece />
          <div>
            <p>Points: {points}</p>
            <p>Lines Cleared: {linesCleared}</p>
          </div>
          <Gameboard />
          <PieceQueue />
          {state === 'LOST' && (
            <div>
              <h2>Game Over</h2>
              {/* <button onClick={controller.restart}>New game</button> */}
            </div>
          )}
        </div>
      )}
    </Tetris>
  </div>
);

export default GameComp;
