import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/Main'; 
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Forum from './Pages/Forum';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Forum" element={<Forum/>}/>
      </Routes>
    </div>
  </Router>
);
}

export default App;