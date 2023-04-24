import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import List from './pages/list/List';
import { Routes, Route } from 'react-router-dom';
import Edit from './pages/edit/Edit';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
