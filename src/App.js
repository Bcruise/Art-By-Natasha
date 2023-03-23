import React from 'react';
import {HashRouter as  Router, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import LargeImageScroller from './components/LargeImageScroller';

function App() {
  return (
    <Router>
    <>
      <Routes> 
        <Route path="/" element={<LargeImageScroller />} />
      </Routes>
    </>
  </Router>
  );
}

export default App;
