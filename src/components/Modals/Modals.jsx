import LevelCompleteModal from './LevelCompleteModal';
import GameStartModal from './GameStartModal';
import GameEndModal from './GameEndModal';

function Modals({ startGame, gameIsSetUp, gameIsOver, levelIsOver }) {
  return (
    <>
      {!gameIsSetUp && <GameStartModal func={startGame} />}
      {levelIsOver && <LevelCompleteModal />}
      {gameIsOver && <GameEndModal />}
    </>
  );
}

export default Modals;
