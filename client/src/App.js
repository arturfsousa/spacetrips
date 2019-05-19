import React from 'react';
import Launches from './pages/Launches';
import Launch from './pages/Launch';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Launch launchId={10} />
      <Profile />
      <Launches />
    </div>
  );
}

export default App;
