import React from 'react';
import './Header.css';
import { FcTodoList } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="header">
      <div className="main">
        <span className="icon">
          <FcTodoList />
        </span>
        <span className="title">Todo List</span>
      </div>
      <div className="nav">    
        <Link to="/" className={pathname==="/" ? "active" : ""}>Home</Link>
        <Link to="/list" className={pathname==="/list" ? "active" : ""}>List</Link>
      </div>
    </div>
  );
};

export default Header;
