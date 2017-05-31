import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Input from './components/Input.js';
import 'mui-react/dist/mui-react.css';
import TableComponent from './components/Table.js';
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyC6IG7y_KrJDlv6WAz26AWkJaNNNfbEVTE",
  authDomain: "contract-tracker.firebaseapp.com",
  databaseURL: "https://contract-tracker.firebaseio.com",
  projectId: "contract-tracker",
  storageBucket: "contract-tracker.appspot.com",
  messagingSenderId: "43978944557"
};
firebase.initializeApp(config);

var database = firebase.database();
var _this;

const getSectionsDB = () => {
  console.log("where are u????"+database.ref('/').once())
}


function writeContractData(name, price, description) {
  //var key = firebase.database().ref().child('contracts').push().key
  firebase.database().ref('/contracts/' + name).set({
    name: name,
    price: price,
    description : description
  });
}
function getContractData(){
    var contracts = database.ref('/contracts');
    contracts.on('value', function(snapshot){
      createContract(snapshot.val());
    });
}
function createContract(data){
  for(var contract in data){
      var Contract = {
        name:contract.name,
        price:contract.price,
        description:contract.description,
        edit:true,
        key:11
      }
      console.log(Contract);
      addContract2(Contract);
    }
}
function addContract2(data){
    var Contract = {
      name:data.name,
      price:data.price,
      description:data.description,
      edit:true,
      key:_this.state.key_inc
    }
    var key = _this.state.key_inc +1;
    var contracts = _this.state.contracts.slice().concat([Contract]);
    _this.setState({
      contracts:contracts,
      key_inc:key
    });
  }
export default class App extends Component {
  constructor() {
      super();
      _this = this;
      this.state = {
        contracts:[],
        key_inc:0
      };
      getContractData();
  }
  addContract(data){
    var Contract = {
      name:data.name,
      price:data.price,
      description:data.description,
      edit:true,
      key:_this.state.key_inc
    }
    writeContractData(data.name,data.price,data.description);
    var key = _this.state.key_inc +1;
    var contracts = _this.state.contracts.slice().concat([Contract]);
    _this.setState({
      contracts:contracts,
      key_inc:key
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
    writeContractData(data.name,data.price,data.description);
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

