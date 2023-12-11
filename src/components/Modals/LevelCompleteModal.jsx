import Modal from './Modal';

function LevelCompleteModal({ level, func }) {
  const btnText = 'Keep Going!';
  const content = () => (
    <>
      <h2>Great Job!</h2>
      <p>Ready for level ${level}?</p>
    </>
  );

  return <Modal content={content} btnText={btnText} func={func} />;
}

export default LevelCompleteModal;
