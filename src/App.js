import React from 'react';
import './App.css';
import {Loader} from './loader';
import {ShowLoaderStatus} from './loader/show-loader-status';

function App() {
  return (
    <div className="App">
        <ShowLoaderStatus />
        <Loader />
    </div>
  );
}

export default App;
