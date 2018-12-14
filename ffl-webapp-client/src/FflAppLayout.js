import React, { Component } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from './gslLogo.jpg';
import './FflAppHeader.css';
import FflAppMessageBoard from './FflAppMessageBoard';
import FflAppScoreboard from './FflAppScoreboard';


class FflAppLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { children } = this.props;

        return ( 
            <div>
            <FflAppScoreboard/>
            <AppBar position='static'>
                <Toolbar>
                    <img src={logo} className="FflApp-logo"/>
                    <Tabs>
                        <Tab label='Schedule' component={Link} to='/'/>
                        <Tab label='Standings' component={Link} to='/standings'/>
                        <Tab label='Scores' component={Link} to='/'/>
                    </Tabs>
                </Toolbar>
                
            </AppBar>

            <Grid container>
                <Grid item xs={9}>
                    {children}
                </Grid>
                <Grid item xs={3}>
                    <FflAppMessageBoard/>
                </Grid>
            </Grid>
            </div>
         );
    }
}
 
export default FflAppLayout;