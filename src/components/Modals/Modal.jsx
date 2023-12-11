import { useState } from 'react';
import './Modal.css';

function Modal({ content, btnText, func }) {
  const [display, setDisplay] = useState('flex');
  const styles = {
    display: display,
  };

  const handleClick = () => {
    func();
    closeModal();
  };

  const closeModal = () => {
    setDisplay('none');
  };

  return (
    <div id="myModal" style={styles}>
      <div id="modal-content">
        {content()}
        <button id="modal-submit" type="submit" onClick={handleClick}>
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Modal;
