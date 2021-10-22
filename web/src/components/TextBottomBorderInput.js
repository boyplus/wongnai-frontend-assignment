import React, { Fragment } from 'react';
import '../css/input.css'

const TextBottomBorderInput = ({ value, onChange }) => {
  return <Fragment>
    <div style={{ textAlign: 'center' }}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        autoFocus={true}
        className="bottom-border-input center-block">
      </input>
    </div>
  </Fragment>
}

export default TextBottomBorderInput;