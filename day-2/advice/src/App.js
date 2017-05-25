import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var quotes = ['Kick ass today', 
              'Act like you know what you\'re doing',
              'Watch out for the fucking scope creep',
              'Make sure there\'s money in the bank',
              'Get that git flow', 
              ]

var _this;

class App extends Component {
    constructor() {
      super();
      _this = this;
      this.state = {
        index:0 
      };
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Great fucking advice</h2>
        </div>
            <p className='Quote' onClick = {() => changeState()}> {quotes[this.state.index]}</p>
       </div>
    );
  }
}
function changeState(){
  if (_this.state.index == 4) {
    _this.setState({
      index:0
    }
    )
  }
  else {
    _this.setState({
      index: _this.state.index + 1
    })
  }
}
export default App;
