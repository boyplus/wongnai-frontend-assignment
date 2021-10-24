import React, { Fragment } from 'react';
import '../css/input.css'

const TextInputBottomBorder = ({ value, onChange, placeholder }) => {
  return <Fragment>
    <div style={{ textAlign: 'center' }}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        autoFocus={true}
        placeholder={placeholder}
        className="bottom-border-input center-block">
      </input>
    </div>
  </Fragment>
}

export default TextInputBottomBorder;