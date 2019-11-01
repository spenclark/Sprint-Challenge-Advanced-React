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
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({
        players: res.data
      }))
      .catch(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
      <div className="header"id="title"> Advanced React Sprint: World Cup Players by Search </div>
      <div>
        <SingupForm />
      </div>
      
      <div className="chartDiv">
              <div className="player-row">
                <div className="player-cell">
                <h4>Name</h4>
                </div>
                <div className="player-cell"> 
                <h4>Country</h4>
                </div>
                <div className="player-cell">
                <h4>Search Rank</h4>
                </div>
              </div>
                {this.state.players.map(player =>
                <Player player={player}/>
                 )}
          </div>
      </div>
     );
    }
}

export default App;
