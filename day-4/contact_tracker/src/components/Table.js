import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SingleContract from './SingleContract.js';
import 'mui-react/dist/mui-react.css';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class TableComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        var contracts = [];
        for(var i=0;i < this.props.contracts.length;i++){
            contracts.push(
                <SingleContract editContract={this.props.editContract}changeContract={this.props.changeContract} data={this.props.contracts[i]}/>
            )
        }
        return(
            <MuiThemeProvider>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Contract Name</TableHeaderColumn>
                            <TableHeaderColumn>Price</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Edit</TableHeaderColumn>
                            <TableHeaderColumn>Done</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {contracts}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
    }
}