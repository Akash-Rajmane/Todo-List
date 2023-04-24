import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { GoCheck } from 'react-icons/go';
import './BasicCard.css';


const BasicCard = (props) => {
  


  return (
    <div className={"basicCard"}>
      <p className={props.strike ? 'strikeThrough' : 'noStrike'}>
        {props.todo}
      </p>
      <div className="basicFooter">
        <span className="icon">
          <AiFillEdit onClick={props.onEdit} />
        </span>
        <span className="icon">
          <AiFillDelete onClick={props.onDelete} />
        </span>
        <span className="icon">
          <GoCheck onClick={props.onComplete} />
        </span>
      </div>
    </div>
  );
};

export default BasicCard;
