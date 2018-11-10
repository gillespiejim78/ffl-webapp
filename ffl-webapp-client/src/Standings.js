import React, { Component } from 'react';
import fetchFflData from './FflApi';

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
        <div> 
            {standings.map(
                team => <div key={team.teamId}>{team.teamName}</div>
            )} 
        </div>
        );
    }
}
 
export default Standings;