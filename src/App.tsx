import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Results from './components/Results';

import Sidebar from './components/Sidebar';
import Table from './components/Table';
import { toggle } from './store/sidebarSlice';
import { AppState } from './store/store';

function App() {
  const open = useSelector((state: AppState) => state.sidebar.isOpen);
  const table = useSelector((state: AppState) => state.table.selected);
  const dispatch = useDispatch();

  const handleSidebarToggle = () => {
    dispatch(toggle());
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Starforged Oracles</h1>
        <h3>Powered by <a href="https://github.com/rsek/dataforged" target="_blank">Dataforged</a></h3>
        
      </header>
      <div className="main">
        <p className={`sidebar-toggle ${open ? 'open' : ''}`} onClick={handleSidebarToggle}>{ open ? '<' : '>'}</p> 
        <section className="table">
          {table 
          ? (<><Table/></>)
          : (<><h3>Select a table from the left.</h3></>)}
        </section>
        <section className="results">
          <Results/>
        </section>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
