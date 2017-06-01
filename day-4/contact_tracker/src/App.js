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



function writeNewContractData(name, price, description) {
  var key = firebase.database().ref().child('contracts').push().key
  //console.log(name +price+description);
  firebase.database().ref('/contracts/' + key).set({
    name: name,
    price: price,
    description : description
  });
  return key;
}
function writeContractData(name, price, description, key) {
  firebase.database().ref('/contracts/' + key).set({
    name: name,
    price: price,
    description : description
  });
}


//receiving contracts from database
function getContractData(){
    var contracts = database.ref('/contracts');
    contracts.once('value', function(snapshot){
      createContract(snapshot.val());
    });
}

function createContract(data){
  console.log("!!!!!!");
  for(var key in data){
    var contract = data[key];
    //console.log(contract);
      var Contract = {
        name:contract.name,
        price:contract.price,
        description:contract.description,
        edit:true,
        key:key
      }
      addContract2(Contract);
    }
}
function addContract2(data){
    var contracts = _this.state.contracts.slice().concat([data]);
    _this.setState({
      contracts:contracts,
    });
  }
  //receiving contracts from database


export default class App extends Component {
  constructor() {
      super();
      _this = this;
      this.state = {
        contracts:[]
      };
      getContractData();
  }
  addContract(data){
    var key = writeContractData(data.name,data.price,data.description);
    var Contract = {
      name:data.name,
      price:data.price,
      description:data.description,
      edit:true,
      key:key
    }
    var contracts = _this.state.contracts.slice().concat([Contract]);
    _this.setState({
      contracts:contracts,
    });
  }
  changeContract(data){
    writeContractData(data.name,data.price,data.description, data.key);
  }
  editContract(field, key, value){
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
      state.contracts[index].edit = !(state.contracts[index].edit);
    }
     _this.setState({state});
  }
  render() {
    console.log(this.state.contracts);
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

