import React from 'react'
import './App.css';
import Layout from './page/Box';
import {Routes, Route} from 'react-router-dom'
import Create from './page/Create';
import Register from './page/Register';
import Login from './page/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/article/create' element={<Create />} />
        <Route path='/*' element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
