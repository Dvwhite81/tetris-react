import { useState } from 'react';
import Header from '../Header/Header';
import Modals from '../Modals/Modals';
import Score from '../Score/Score';
import Board from '../Board/Board';
import Next from '../Next/Next';
import './Main.css';
import {
  getFirstCoords,
  getInitialGrid,
} from '../../scripts/grid-helpers';
import {
  getNextPieces,
  getRandomPiece,
} from '../../scripts/piece-helpers';

function Main() {
  const [gameIsSetUp, setGameIsSetUp] = useState(false);
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [levelIsOver, setLevelIsOver] = useState(false);
  const [moveIsStarted, setMoveIsStarted] = useState(false);
  const [moveIsOver, setMoveIsOver] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [linesLeft, setLinesLeft] = useState(10);
  const [grid, setGrid] = useState([]);
  const [currentPiece, setCurrentPiece] = useState('');
  const [nextPieces, setNextPieces] = useState([]);

  const startGame = () => {
    setGameIsSetUp(true);
    const initialGrid = getInitialGrid();
    setGrid(initialGrid);
    const initialPiece = getRandomPiece();
    const firstCoords = getFirstCoords(initialPiece);
    initialPiece.coords = firstCoords;
    setCurrentPiece(initialPiece);
    const initialNext = getNextPieces();
    setNextPieces(initialNext);
    setGameIsStarted(true);
    startLevel();
  };

  const startLevel = () => {};

  const startMove = () => {};

  return (
    <div id="main">
      <Header />
      <Modals
        startGame={startGame}
        gameIsStarted={gameIsStarted}
        gameIsOver={gameIsOver}
        levelIsOver={levelIsOver}
      />
      {gameIsStarted && (
        <>
          <Score
            score={score}
            level={currentLevel}
            lines={linesLeft}
          />
          <Board grid={grid} currentPiece={currentPiece} />
          <Next nextPieces={nextPieces} />
        </>
      )}
    </div>
  );
}

export default Main;
