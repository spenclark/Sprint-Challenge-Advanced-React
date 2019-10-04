import React from 'react';
import axios from 'axios'
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
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({
        players: res.data
      }))
      .catch()
  }

  render() {
  return (
    <div className="App">
    <div>Advanced React Sprint: World Cup Players by Search </div>
    </div>
  );
  }
}

export default App;
