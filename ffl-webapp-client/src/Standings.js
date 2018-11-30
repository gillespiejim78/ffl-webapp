import React, { Component } from 'react';
import { fetchRankings } from './FflApi';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from '@material-ui/core';

class Standings extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          standings: [],
          isLoading: false
        }
      }
    
    componentDidMount() {
        this.setState({isLoading: true});
        fetchRankings().then(
            data => this.setState({standings: data, isLoading: false})
        )
    }

    render() { 
        const {standings, isLoading} = this.state;

        if (isLoading) {
            return <CircularProgress/>;
        }

        return ( 
        <Paper> 
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team Name</TableCell>
                        <TableCell>Team Record</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {standings.map(team => 
                    <TableRow>
                        <TableCell>{team.teamName}</TableCell>
                        <TableCell>{team.record}</TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </Paper>
        );
    }
}
 
export default Standings;