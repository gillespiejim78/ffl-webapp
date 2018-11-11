import React, { Component } from 'react';
import { Card, CardContent, Avatar, Typography } from '@material-ui/core';

const divStyle = {
    display: 'flex'
}

class FflAppMatchup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const matchup = this.props.matchup;
        return ( 
            <Card>
                <CardContent>
                    {matchup.map(team =>
                        <div style={divStyle}>
                            <Avatar src={team.logoUrl} />
                            <Typography component="h2">{team.teamName}</Typography>
                            <Typography>&nbsp;{team.score}</Typography>
                        </div>
                        )
                    }
                </CardContent>
            </Card>                
         );
    }
}
 
export default FflAppMatchup;