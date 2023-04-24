import React, { useState } from 'react';
import { addTodo } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  const addTodoHandler = () => {
    if (input === '') {
      alert('Please enter the valid task');
      return;
    }

    const id = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1;
    const payload = {
      id: id,
      todo: input,
      strike: false,
      themeLight: true,
    };
    dispatch(addTodo(payload));
    setInput('');
    navigate('/list');
  };

  return (
    <div className="homePage">
      <div className="inputBox">
        <input
          type="text"
          className="inputElement"
          placeholder="Enter a task"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button className="btnElement" onClick={addTodoHandler}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Home;
