import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import DemoQuery from './Components/DemoQuery';
import EventsList from './Components/EventsList'
 
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <EventsList />
    </div>
  );
}

export default App;
