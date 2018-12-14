import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import FflAppLayout from './FflAppLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FflAppHome from './FflAppHome';
import Standings from './Standings';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#05326c'
    }
  }
});

class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <FflAppLayout>
                        <Switch>
                            <Route exact path='/' component={FflAppHome}/>
                            <Route path='/standings' component={Standings}/>
                        </Switch>
                    </FflAppLayout>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
