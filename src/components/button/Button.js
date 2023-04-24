import React from 'react';
import './Button.css';

const Button = (props) => {
  let btnClass = `customBtn ${props.color} ${
    props.disabled && `disabledBtn`
  } customClass`;

  return (
    <button onClick={props.onClick} className={btnClass}>
      {props.children}
    </button>
  );
};

export default Button;
