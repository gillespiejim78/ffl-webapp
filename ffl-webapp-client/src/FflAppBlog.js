import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import matchup from './matchup.jpg'

const styles = {
    media: {
        height: 500
    }
}
const FflAppBlog = (props) => {
    const { classes } = props;
    return ( 
    <Card>
        <CardMedia className={classes.media} image={matchup}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Welcome to the New Home of the GSL
            </Typography>
            <Typography component="p">
                The developers at GSL.com are proud to bring you the most advanced
                website in the history of fantasy footbal!
            </Typography>
        </CardContent>
    </Card> 
    );
}
 
export default withStyles(styles)(FflAppBlog);