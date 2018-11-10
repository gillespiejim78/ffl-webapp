import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './gslLogo.jpg';
import './FflAppHeader.css';

class FflAppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <AppBar position='static'>
                <Toolbar>
                    <img src={logo} className="FflApp-logo"/>
                </Toolbar>
            </AppBar>
         );
    }
}
 
export default FflAppHeader;