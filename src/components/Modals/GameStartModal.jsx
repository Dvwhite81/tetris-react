import Modal from './Modal';

function GameStartModal({ func }) {
  const btnText = 'Start!';
  const content = () => (
    <>
      <h2>Ready To Play?</h2>
      <p>Press Start!</p>
    </>
  );

  return <Modal content={content} btnText={btnText} func={func} />;
}

export default GameStartModal;
