import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { YELLOW_TEXT} from '../utils/colors';

const styles = theme => ({
    
    dot:{
        height:'20px',
        width: '20px',
        backgroundColor: YELLOW_TEXT,
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '10px',
        verticalAlign:'middle'
    },
    dot2:{
        height:'20px',
        width: '20px',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '10px',
        verticalAlign:'middle',
        border: '1px solid ' + YELLOW_TEXT
    }
  
  })


class Circular extends Component {
    render(){
        const { classes } = this.props;
        return this.props.full ? <span className = {classes.dot}></span> : <span className = {classes.dot2}></span> 
            
    }
}

export default (withStyles(styles)(Circular))