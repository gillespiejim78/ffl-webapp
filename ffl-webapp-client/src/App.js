import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, Grid, Paper } from '@material-ui/core';
import FflAppHeader from './FflAppHeader';
import FflAppScoreboard from './FflAppScoreboard';
import FflAppMessageBoard from './FflAppMessageBoard';

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
                <Grid container>
                    <Grid item xs={9}>
                        <Paper>Hello, GSL</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <FflAppMessageBoard/>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
