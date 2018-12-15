import React, { Component } from 'react';
import FflAppBlog from './FflAppBlog';

class FflAppHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <FflAppBlog/>
         );
    }
}
 
export default FflAppHome;