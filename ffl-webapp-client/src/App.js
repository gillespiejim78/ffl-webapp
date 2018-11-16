import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import FflAppHeader from './FflAppHeader';
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
            </MuiThemeProvider>
        );
    }
}

export default App;
