import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import DemoQuery from './Components/DemoQuery';
 
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>Demo query</p>
      <DemoQuery />
      <p>end of demo query</p>
    </div>
  );
}

export default App;
