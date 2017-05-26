import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import StickyFooter from 'material-ui/BottomNavigation';


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

        <div className="Nav"> 
          <MuiThemeProvider>
          <Nav />
          </MuiThemeProvider>
        </div>
        <MuiThemeProvider>
          <RaisedButton label="Next Quote" onClick={() => changeState()}/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <RaisedButton label="Random Quote" onClick={() => randomState()}/>
        </MuiThemeProvider>
            <button className='Quote' onClick = {() => changeState()}> {quotes[this.state.index]} </button>
        <MuiThemeProvider>
          <StickyFooter />
        </MuiThemeProvider>
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

function randomState(){
  var rnd = Math.floor(Math.random()*5);
  _this.setState({
    index:rnd
  });
}
export default App;
