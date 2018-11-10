import React, { Component } from 'react';
import fetchFflData from './FflApi';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
        fetchFflData().then(
            data => this.setState({standings: data, isLoading: false})
        )
    }

    render() { 
        const {standings, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return ( 
        <Paper> 
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {standings.map(team => <TableRow><TableCell>{team.teamName}</TableCell></TableRow>)}
                </TableBody>
            </Table>
        </Paper>
        );
    }
}
 
export default Standings;