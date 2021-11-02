import React from 'react';
import './index.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function TetrisField(props) {
  const { width } = useWindowDimensions();
  var rows = [];
  props.field.forEach(function (row) {
    const cols = row.map((c) => (
      <td className={' FancyBorder tdcol-' + c}> </td>
    ));
    rows.push(<tr>{cols}</tr>);
  });
  return (
    <div className={' AlignCenter'}>
      <h3
        className={' WhiteText PlayField'}
        style={{ width: `${width - 130}px` }}>
        {' '}
        Level:{props.level} Score:{props.score}{' '}
        {props.gameOver && `  Good game, but it's over. Get back to work!  `}
      </h3>
      <table>
        <tr>{rows}</tr>
      </table>
      {props.children}
    </div>
  );
}

class Tetris extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleFlipClick = this.handleFlipClick.bind(this);
    this.handleDownClick = this.handleDownClick.bind(this);
    this.handleNewGameClick = this.handleNewGameClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    var field = [];
    for (var y = 0; y < props.ySize; y++) {
      var row = [];
      for (var x = 0; x < props.xSize; x++) {
        row.push(0);
      }
      field.push(row);
    }
    var xStart = Math.floor(parseInt(props.xSize) / 2);
    this.state = {
      activeTileX: xStart,
      activeTileY: 1,
      activeTile: 1,
      tileTurn: 0,
      score: 0,
      level: 1,
      tileCount: 0,
      gameOver: false,
      pause: false,
      field: field,
      tiles: [
        // 7 tiles each tile has 4 possible turnstates which are x/y offsets
        [
          [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0],
          ],
        ], // 1 single square (not part of the game)
        [
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
          ],
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
          ],
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
          ],
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
          ],
        ], // the 4-block
        [
          [
            [0, -1],
            [0, 0],
            [0, 1],
            [0, 2],
          ],
          [
            [-1, 0],
            [0, 0],
            [1, 0],
            [2, 0],
          ],
          [
            [0, -1],
            [0, 0],
            [0, 1],
            [0, 2],
          ],
          [
            [-1, 0],
            [0, 0],
            [1, 0],
            [2, 0],
          ],
        ], // the long one
        [
          [
            [0, 0],
            [-1, 0],
            [1, 0],
            [0, -1],
          ],
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [0, -1],
          ],
          [
            [0, 0],
            [-1, 0],
            [1, 0],
            [0, 1],
          ],
          [
            [0, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ],
        ], // the T
        [
          [
            [0, 0],
            [-1, 0],
            [1, 0],
            [-1, -1],
          ],
          [
            [0, 0],
            [0, 1],
            [0, -1],
            [1, -1],
          ],
          [
            [0, 0],
            [1, 0],
            [-1, 0],
            [1, 1],
          ],
          [
            [0, 0],
            [0, 1],
            [0, -1],
            [-1, 1],
          ],
        ], // the inverse L
        [
          [
            [0, 0],
            [1, 0],
            [-1, 0],
            [1, -1],
          ],
          [
            [0, 0],
            [0, 1],
            [0, -1],
            [1, 1],
          ],
          [
            [0, 0],
            [1, 0],
            [-1, 0],
            [-1, 1],
          ],
          [
            [0, 0],
            [0, 1],
            [0, -1],
            [-1, -1],
          ],
        ], // the L
        [
          [
            [0, 0],
            [1, 0],
            [0, -1],
            [-1, -1],
          ],
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, -1],
          ],
          [
            [0, 0],
            [1, 0],
            [0, -1],
            [-1, -1],
          ],
          [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, -1],
          ],
        ], // the Z
        [
          [
            [0, 0],
            [-1, 0],
            [0, -1],
            [1, -1],
          ],
          [
            [0, 0],
            [0, -1],
            [1, 0],
            [1, 1],
          ],
          [
            [0, 0],
            [-1, 0],
            [0, -1],
            [1, -1],
          ],
          [
            [0, 0],
            [0, -1],
            [1, 0],
            [1, 1],
          ],
        ], // the inverse Z
      ],
    };
  }
  componentDidMount() {
    var timerId;
    timerId = setInterval(
      () => this.updateField('down'),
      1000 - (this.state.level * 10 > 600 ? 600 : this.state.level * 10)
    );
    this.setState({ timerId: timerId });
  }
  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }
  updateField(command) {
    if (this.state.gameOver || this.state.pause) {
      return;
    }
    var xAdd = 0;
    var yAdd = 0;
    var turnAdd = 0;
    var tile = this.state.activeTile;

    if (command == 'left') {
      xAdd = -1;
    }
    if (command == 'right') {
      xAdd = 1;
    }
    if (command == 'turn') {
      turnAdd = 1;
    }
    if (command == 'down') {
      yAdd = 1;
    }

    var field = this.state.field;
    var x = this.state.activeTileX;
    var y = this.state.activeTileY;
    var turn = this.state.tileTurn;
    const tiles = this.state.tiles;

    // remove actual tile from field to test for new insert position
    field[y + tiles[tile][turn][0][1]][x + tiles[tile][turn][0][0]] = 0;
    field[y + tiles[tile][turn][1][1]][x + tiles[tile][turn][1][0]] = 0;
    field[y + tiles[tile][turn][2][1]][x + tiles[tile][turn][2][0]] = 0;
    field[y + tiles[tile][turn][3][1]][x + tiles[tile][turn][3][0]] = 0;

    // test if the move can be executed on actual field
    var xAddValid = true;
    if (xAdd != 0) {
      for (var i = 0; i <= 3; i++) {
        if (
          x + xAdd + tiles[tile][turn][i][0] >= 0 &&
          x + xAdd + tiles[tile][turn][i][0] < this.props.xSize
        ) {
          if (
            field[y + tiles[tile][turn][i][1]][
              x + xAdd + tiles[tile][turn][i][0]
            ] != 0
          ) {
            xAddValid = false;
          }
        } else {
          xAddValid = false;
        }
      }
    }
    if (xAddValid) {
      x += xAdd;
    }
    //try the Turn
    var newTurn = turn + turnAdd > 3 ? 0 : turn + turnAdd;
    var turnValid = true;
    if (turnAdd != 0) {
      for (var i = 0; i <= 3; i++) {
        if (
          x + tiles[tile][newTurn][i][0] >= 0 &&
          x + tiles[tile][newTurn][i][0] < this.props.xSize &&
          y + tiles[tile][newTurn][i][1] >= 0 &&
          y + tiles[tile][newTurn][i][1] < this.props.ySize
        ) {
          if (
            field[y + tiles[tile][newTurn][i][1]][
              x + tiles[tile][newTurn][i][0]
            ] != 0
          ) {
            turnValid = false;
          }
        } else {
          turnValid = false;
        }
      }
    }
    if (turnValid) {
      turn = newTurn;
    }
    // try the y-Add.
    var yAddValid = true;
    if (yAdd != 0) {
      for (var i = 0; i <= 3; i++) {
        if (
          y + yAdd + tiles[tile][turn][i][1] >= 0 &&
          y + yAdd + tiles[tile][turn][i][1] < this.props.ySize
        ) {
          if (
            field[y + yAdd + tiles[tile][turn][i][1]][
              x + tiles[tile][turn][i][0]
            ] != 0
          ) {
            yAddValid = false;
          }
        } else {
          yAddValid = false;
        }
      }
    }
    if (yAddValid) {
      y += yAdd;
    }
    // render the tile at new position
    field[y + tiles[tile][turn][0][1]][x + tiles[tile][turn][0][0]] = tile;
    field[y + tiles[tile][turn][1][1]][x + tiles[tile][turn][1][0]] = tile;
    field[y + tiles[tile][turn][2][1]][x + tiles[tile][turn][2][0]] = tile;
    field[y + tiles[tile][turn][3][1]][x + tiles[tile][turn][3][0]] = tile;

    if (!yAddValid) {
      // Moving Down was not possible -> remove completed Lines, add Score. find nextr tile and check for Game Over ...
      for (var yr = this.props.ySize - 1; yr >= 0; yr--) {
        var lineComplete = true;
        for (var x = 0; x < this.props.xSize; x++) {
          if (field[yr][x] == 0) {
            lineComplete = false;
          }
        }
        if (lineComplete) {
          for (var ySrc = yr; yr > 0; yr--) {
            for (var x = 0; x < this.props.xSize; x++) {
              field[yr][x] = field[yr - 1][x];
            }
          }
          yr = this.props.ySize; // check the array again after line removal
        }
      }
      this.setState((prev) => ({
        score: prev.score + 1 * prev.level,
        tileCount: prev.tileCount + 1,
        level: 1 + Math.floor(prev.tileCount / 10),
      }));
      var timerId;
      clearInterval(this.state.timerId);
      timerId = setInterval(
        () => this.updateField('down'),
        1000 - (this.state.level * 10 > 600 ? 600 : this.state.level * 10)
      );
      this.setState({ timerId: timerId });
      // New Tile:
      tile = Math.floor(Math.random() * 7 + 1);
      x = parseInt(this.props.xSize) / 2;
      y = 1;
      turn = 0;
      // Test for Game Over, can the new tile placed in field?
      if (
        field[y + tiles[tile][turn][0][1]][x + tiles[tile][turn][0][0]] != 0 ||
        field[y + tiles[tile][turn][1][1]][x + tiles[tile][turn][1][0]] != 0 ||
        field[y + tiles[tile][turn][2][1]][x + tiles[tile][turn][2][0]] != 0 ||
        field[y + tiles[tile][turn][3][1]][x + tiles[tile][turn][3][0]] != 0
      ) {
        this.setState({ gameOver: true });
      } else {
        // Render New Tile and go on
        field[y + tiles[tile][turn][0][1]][x + tiles[tile][turn][0][0]] = tile;
        field[y + tiles[tile][turn][1][1]][x + tiles[tile][turn][1][0]] = tile;
        field[y + tiles[tile][turn][2][1]][x + tiles[tile][turn][2][0]] = tile;
        field[y + tiles[tile][turn][3][1]][x + tiles[tile][turn][3][0]] = tile;
      }
    }
    this.setState((prev) => ({
      field: field,
      activeTileX: x,
      activeTileY: y,
      tileTurn: turn,
      activeTile: tile,
    }));
  }
  handleLeftClick() {
    this.updateField('left');
  }
  handleRightClick() {
    this.updateField('right');
  }
  handleFlipClick() {
    this.updateField('turn');
  }
  handleDownClick() {
    this.updateField('down');
  }
  handlePauseClick() {
    this.setState((prev) => ({ pause: !prev.pause }));
  }
  handleNewGameClick() {
    var field = [];
    for (var y = 0; y < this.props.ySize; y++) {
      var row = [];
      for (var x = 0; x < this.props.xSize; x++) {
        row.push(0);
      }
      field.push(row);
    }
    var xStart = Math.floor(parseInt(this.props.xSize) / 2);
    this.setState((prev) => ({
      activeTileX: xStart,
      activeTileY: 1,
      activeTile: 2,
      tileTurn: 0,
      score: 0,
      level: 1,
      tileCount: 0,
      gameOver: false,
      field: field,
    }));
  }
  render() {
    return (
      <div>
        {' '}
        <table>
          {' '}
          <tr>
            {' '}
            <td> </td>{' '}
            <td>
              <TetrisField
                field={this.state.field}
                gameOver={this.state.gameOver}
                score={this.state.score}
                level={this.state.level}
                turn={this.state.tileTurn}
              />
            </td>{' '}
          </tr>{' '}
          <tr>
            {' '}
            <td> </td>
            <td className={'ButtonAlignCenter'}>
              <button onClick={this.handleLeftClick}>Left</button>
              <button onClick={this.handleFlipClick}>Flip</button>
              <button onClick={this.handleRightClick}>Right</button>
            </td>{' '}
          </tr>{' '}
          <tr>
            {' '}
            <td> </td>
            <td className={'ButtonAlignCenter'}>
              <button onClick={this.handleDownClick}>Down</button>
            </td>
            <td> </td>{' '}
          </tr>{' '}
          <tr>
            {' '}
            <td> </td>{' '}
            <td>
              <button onClick={this.handleNewGameClick}>New Game</button>
              <button onClick={this.handlePauseClick}>Pause</button>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

function TetrisComp() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: 'flex',
        width: `${width * 0.9}px`,
        height: `${height * 0.9}px`,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Tetris xSize="14" ySize="20"></Tetris>
    </div>
  );
}

export default TetrisComp;
