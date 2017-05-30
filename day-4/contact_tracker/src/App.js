import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from './components/Input.js';
import 'mui-react/dist/mui-react.css';
//import RaisedButton from 'material-ui/RaisedButton';

import TableComponent from './components/Table.js';

var key =0;
var _this;
export default class App extends Component {
  constructor() {
      super();
      _this = this;
      this.state = {
        contracts:[]
      };
  }
  addContract(data){
    var Contract = {
      name:data.name,
      price:data.price,
      description:data.description,
      edit:true,
      key:key
    }
    key +=1;
    var contracts = _this.state.contracts.slice().concat([Contract]);
    _this.setState({
      contracts:contracts
    });
  }
  changeContract(data){
    var index;
    for(var i=0;i<_this.state.contracts.length;i++){
      if(_this.state.contracts[i].key == data.key){
        index = i;
        break;
      }
    }
    var contract = {
          name:data.name,
          price:data.price,
          description:data.description,
          key:data.key,
          edit: true
        }
    var state = _this.state;
    state[index] = contract;
    _this.setState({state});
  }
  editContract(field, key, value){
    console.log(key);
    var index;
    for(var i=0;i<_this.state.contracts.length;i++){
      if(_this.state.contracts[i].key == key){
        index = i;
        break;
      }
    }
    var state = _this.state;
    if(field == "name"){
      state.contracts[index].name = value;
    }
    else if(field == "price"){
      state.contracts[index].price = value;
    }
    else if(field == "description"){
      state.contracts[index].description = value;
    }
    else if(field == "edit"){
      console.log(state.contracts[index]);
      state.contracts[index].edit = !(state.contracts[index].edit);
    }
     _this.setState({state});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome Contract Tracker</h1>
        </div>
        <div>

        <MuiThemeProvider>
            <Input addContract={this.addContract}/>
        </MuiThemeProvider>

        <MuiThemeProvider>
            <TableComponent editContract={this.editContract} changeContract={this.changeContract} contracts={this.state.contracts}/>
        </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

