import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GoCheck } from 'react-icons/go';
import { GiLightBulb } from 'react-icons/gi';
import Button from '../button/Button';
import './ThemeCard.css';

const ThemeCard = (props) => {
  return (
    <div className={props.themeLight ? 'light' : 'dark'}>
      {props.url && (
        <div className="imageBox">
          <img src={props.url} alt="img" />
        </div>
      )}
      <p className={props.strike ? 'strikeThrough' : 'noStrike'}>
        {props.todo}
      </p>
      <div className="btns">
        <Button color="blue" onClick={props.onEdit}>
          <AiFillEdit />
        </Button>
        <Button color="red" onClick={props.onDelete}>
          <AiFillDelete />
        </Button>
        <Button color="green" onClick={props.onComplete}>
          <GoCheck />
        </Button>
      </div>
      <GiLightBulb
        className={props.themeLight ? 'bulbOn' : 'bulbOff'}
        onClick={props.onToggle}
      />
    </div>
  );
};

export default ThemeCard;
