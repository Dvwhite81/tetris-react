import Modal from './Modal';

function GameEndModal({ func }) {
  const btnText = 'Play Again!';

  const content = () => (
    <>
      <h2>Game Over!</h2>
      {/*
      <div>
        <p>You made it to level {level}!</p>
        <p>Final score: {score}</p>
      </div>
      */}
    </>
  );

  return <Modal content={content} btnText={btnText} func={func} />;
}

export default GameEndModal;
