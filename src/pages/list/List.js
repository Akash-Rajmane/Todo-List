import React from 'react';
import BasicCard from '../../components/cards/BasicCard';
import ThemeCard from '../../components/cards/ThemeCard';
import './List.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  completeTodo,
  deleteTodo,
  setCardStyle,
  toggleTheme,
} from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

const List = () => {
  let navigate = useNavigate();
  const todos = useSelector((state) => state.todoReducer.todos);
  const cardStyle = useSelector((state) => state.todoReducer.cardStyle);
  const dispatch = useDispatch();

  return (
    <div className="listPage">
      <div className="selectBox">
        <label htmlFor="cardStyle">Choose a card-style : </label>
        <select
          name="cardStyle"
          id="cardStyle"
          onChange={(e) => dispatch(setCardStyle(e.target.value))}
          defaultValue={cardStyle}
        >
          <option value="basic">basic</option>
          <option value="theme">theme</option>
        </select>
      </div>
      {cardStyle === 'theme'
        ? todos.map((el, idx) => {
            return (
              <div key={idx}>
                <ThemeCard
                  todo={el.todo}
                  onEdit={() => navigate(`/edit/${el.id}`)}
                  onDelete={() => dispatch(deleteTodo(el.id))}
                  onComplete={() => dispatch(completeTodo(el.id))}
                  strike={el.strike}
                  onToggle={() => dispatch(toggleTheme(el.id))}
                  themeLight={el.themeLight}
                  // url={"https://cdn-icons-png.flaticon.com/512/2387/2387635.png"}
                />
              </div>
            );
          })
        : todos.map((el, idx) => {
            return (
              <div key={idx}>
                <BasicCard
                  todo={el.todo}
                  onEdit={() => navigate(`/edit/${el.id}`)}
                  onDelete={() => dispatch(deleteTodo(el.id))}
                  onComplete={() => dispatch(completeTodo(el.id))}
                  strike={el.strike}
                />
              </div>
            );
          })}
    </div>
  );
};

export default List;
