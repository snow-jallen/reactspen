import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import DemoQuery from './Components/DemoQuery';
import { EventsList as EventsListComponent } from './Modules/Events/EventsList';
import EventById from './Modules/Events/EventById';
import { Toaster } from 'react-hot-toast';
 
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <Toaster />
      <EventsListComponent />
      <EventById />
    </div>
  );
}

export default App;
