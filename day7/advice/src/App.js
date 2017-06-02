import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      index:0,
      quotes:["have fun", "do your best", "you can do it", "i believe in you", "your mother still loves you"]
    }
    this.changeQuote = this.changeQuote.bind(this);
  }
  changeQuote(e){
    if(this.state.index == this.state.quotes.length -1){
      this.setState({
        index:0,
        quotes:this.state.quotes
      })
    }
    else{
      this.setState({
        index:this.state.index+1,
        quotes:this.state.quotes
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="quotes" onClick={this.changeQuote}>
          <h1>{this.state.quotes[this.state.index]}</h1>
        </div>
      </div>
    );
  }
}

export default App;
