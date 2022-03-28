import React from 'react';
import logo from './logo.svg';

import ApiService from './services/ApiService';

function handleClick() {
  let dummyPayload = {
    field1: 'Dummy',
    field2: 'content',
  };
  ApiService.handlePost(dummyPayload);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick} type="submit">
          Connected?
        </button>
      </header>
    </div>
  );
}

export default App;
