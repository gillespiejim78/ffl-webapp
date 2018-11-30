import React, { Component } from 'react';
import { fetchMessageBoard } from './FflApi';
import { List, ListItem, ListItemText, Avatar, CircularProgress } from '@material-ui/core';

const styles = {
    primary: {
        root: {
            fontSize: '0.5rem',
        }
    }
}

const divStyle = {
    height: '40vw',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column-reverse'
}

class FflAppMessageBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            group: [],
            messages: [],
            isLoading: false
         }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetchMessageBoard().then(
            data => this.setState({
                group: data.group,
                messages: data.messages,
                isLoading: false
            })
        )
    }

    render() { 
        const { group, messages, isLoading } = this.state;

        if (isLoading) {
            return (<CircularProgress/>);
        }
        return ( 
            <div style={divStyle}>
            <List>
                {messages.reverse().map(
                    message =>
                        <ListItem divider>
                            <Avatar src={message.avatarUrl}/>
                            <ListItemText primary={message.text} 
                                primaryTypographyProps={{variant: 'body1'}} 
                                secondary={message.userName}
                                secondaryTypographyProps={{variant: 'body2'}}/>
                        </ListItem>
                )}
            </List>
            </div>
         );
    }
}
 
export default FflAppMessageBoard;