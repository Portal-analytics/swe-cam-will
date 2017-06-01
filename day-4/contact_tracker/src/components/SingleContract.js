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


export default class SingleContract extends React.Component {
    constructor(props){
        super(props);
        //console.log(this.props);
    }
    handleNameChange(e){
        this.props.editContract("name", this.props.data.key, e.target.value)
    }
    handlePriceChange(e){
        this.props.editContract("price", this.props.data.key, e.target.value)
    }
    handleDescriptionsChange(e){
        this.props.editContract("description", this.props.data.key, e.target.value)
    }
    handleEditChange(){
        this.props.editContract("edit", this.props.data.key, "")
    }
    handleDoneChange(){
        this.props.changeContract(this.props.data);
    }
    render(){
        return(
            <MuiThemeProvider>
                <TableRow>
                    <TableRowColumn><TextField disabled={this.props.data.edit} value={this.props.data.name} onChange={(e) => this.handleNameChange(e)}/></TableRowColumn>
                    <TableRowColumn><TextField disabled={this.props.data.edit} value={this.props.data.price} onChange={(e) => this.handlePriceChange(e)}/></TableRowColumn>
                    <TableRowColumn><TextField disabled={this.props.data.edit} value={this.props.data.description} onChange={(e) => this.handleDescriptionsChange(e)}/></TableRowColumn>
                    <TableRowColumn><FlatButton onClick={() => this.handleEditChange()} label="Edit"  /></TableRowColumn>
                    <TableRowColumn><FlatButton onClick={() => this.handleDoneChange()} label="Done"  /></TableRowColumn>
                </TableRow>
            </MuiThemeProvider>
        );
    }
}