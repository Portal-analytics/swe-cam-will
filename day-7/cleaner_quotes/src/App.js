import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = (
      {quotes:['You look great today', 'Do what makes you happy', 'Be kind', 'No Blockers'],
      index:0
    }

    );
  this.switchQuote = this.switchQuote.bind(this);
}
  switchQuote() {
      var new_index = this.state.index + 1;
      this.setState({
        index:new_index
      }); 
      var num_quotes = this.state.quotes.length;
      if (this.state.index +1  >= num_quotes) { //magic + 1 in there
        this.setState({
          index: 0,
      });
  }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Motivation</h2>
           <p className="App-intro">
              Click for some great motivational quotes, censored by UVa honor
          </p>
        </div>
        <p className = 'quotebox' onClick = {this.switchQuote}> {this.state.quotes[this.state.index]} </p>
      </div>
    );
  }
}

export default App;
