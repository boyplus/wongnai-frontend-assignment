import React from 'react';
import ReactDOM from 'react-dom';

const PopupMessage = ({ message }) => {
  return ReactDOM.createPortal(<div className="popup-container">
    {message}
  </div>, document.querySelector('#modal'));
}

export default PopupMessage;