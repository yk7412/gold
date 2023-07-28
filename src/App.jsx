import React from 'react'
import './App.css';
import Layout from './page/Box';
import {Routes, Route} from 'react-router-dom'
import Create from './page/Create';
import NoPage from './page/404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/article/create' element={<Create />} />
        <Route path='/*' element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
