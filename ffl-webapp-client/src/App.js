import React, { Component } from 'react';
import Standings from './Standings';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import FflAppHeader from './FflAppHeader';
import green from '@material-ui/core/colors/green';
import FflAppScoreboard from './FflAppScoreboard';

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
                <FflAppScoreboard/>
                <FflAppHeader/>
                <Standings/>
            </MuiThemeProvider>
        );
    }
}

export default App;
