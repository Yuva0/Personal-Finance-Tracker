import React from 'react';
import './App.scss';
import Button from './Button/Button';

function App() {
  return (
    <div className="app">
      <Button>Click Me</Button>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}

export default App;
