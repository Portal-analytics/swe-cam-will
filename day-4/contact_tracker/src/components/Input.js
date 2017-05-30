import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
//import {Button} from 'mui-react';
//import Button from 'mui-react/lib/components/Button.js';
import FlatButton from 'material-ui/FlatButton';
import 'mui-react/dist/mui-react.css';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

injectTapEventPlugin();

var _this;
export default class Input extends React.Component {
    constructor(){
        super();
        _this = this;
        this.state=({
            name:'',
            price: '',
            description: ''
        });
    }
    handleNameChange(e){
        var state = _this.state;
        state.name = e.target.value;
        _this.setState({
            state
        });
        //console.log(_this.state);
    }
    handlePriceChange(e){
        var state = _this.state
        state.price = e.target.value;
        _this.setState({
            state
        });
    }
    handleDescriptionChange(e){
        var state = _this.state
        state.description = e.target.value;
        _this.setState({
            state
        });
    }

    handleSubmit(e) {
        _this.props.addContract(_this.state);
        _this.setState({
            name:'',
            price: '',
            description: ''
        });
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <TextField hintText = "Contract Name" value={this.state.name} onChange={this.handleNameChange}/>
                </MuiThemeProvider>

                <MuiThemeProvider>
                    <TextField hintText= "Contract Price" value={this.state.price} onChange={this.handlePriceChange}/>
                </MuiThemeProvider>

                <MuiThemeProvider>
                    <TextField hintText = "Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                </MuiThemeProvider>

                <MuiThemeProvider>
                    <FlatButton onClick={this.handleSubmit}  
                        label="Submit"  />
                </MuiThemeProvider>
            </div>

        )

    }
}