import React, { Component } from 'react';
import { fetchScoreboard } from './FflApi';
import FflAppMatchup from './FflAppMatchup';
import { CircularProgress } from '@material-ui/core';

const divStyle = {
    display: 'flex'
}

class FflAppScoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            scoreboard: [],
            isLoading: false
         }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetchScoreboard().then(
            data => this.setState({
                scoreboard: data,
                isLoading: false
            })
        )
    }

    render() {
        const { scoreboard, isLoading } = this.state;
        
        if (isLoading) {
            return <CircularProgress/>;
        }

        return ( 
            <div style={divStyle}>
                {scoreboard.map(matchup => <FflAppMatchup matchup={matchup}/>)}
            </div>
         );
    }
}
 
export default FflAppScoreboard;