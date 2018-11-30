import React, { Component } from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './gslLogo.jpg';
import './FflAppHeader.css';
import Standings from './Standings';
import FflAppHome from './FflAppHome';


class FflAppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
            <div>
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
            <Route exact path='/' component={FflAppHome}/>
            {/*<Route path='/standings' component={Standings}/>*/}
            </div>
            </Router>
         );
    }
}
 
export default FflAppHeader;