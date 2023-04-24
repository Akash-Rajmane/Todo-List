import React, { useEffect, useState } from 'react';
import { editTodo } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Edit.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const Edit = () => {
  const params = useParams();
  const id = params.id;
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoReducer.todos);

  const currentTodo = todos.filter((el) => el.id === parseInt(id));
  const { todo } = currentTodo[0];
  const [input, setInput] = useState('');

  useEffect(() => {
    if (currentTodo.length !== 0) {
      setInput(todo);
    }
  }, [currentTodo.length, todo]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const editTodoHandler = () => {
    if (input === '') {
      alert('Please enter the valid task');
      return;
    }
    const payload = {
      id: currentTodo[0].id,
      todo: input,
      strike: currentTodo[0].strike,
      themeLight: currentTodo[0].themeLight,
    };
    dispatch(editTodo(payload));
    setInput('');
    navigate('/list');
  };

  const cancelHandler = () => {
    navigate('/list');
  };

  return (
    <div className="editPage">
      {currentTodo.length === 0 ? (
        <p className="noDataText">Todo List is empty, so cannot edit todo!</p>
      ) : (
        <div className="editBox">
          <input
            type="text"
            className="inputTodoElement"
            onChange={inputChangeHandler}
            value={input}
          />
          <div className="btnsGroup">
            <button onClick={editTodoHandler} className="editBtn">
              Update Todo
            </button>
            <button onClick={cancelHandler} className="cancelBtn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
