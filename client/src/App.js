import React from 'react';

import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get()
      .then()
      .catch()
  }
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
