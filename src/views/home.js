import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { YELLOW_TEXT, DRAWER_BACKGROUND } from '../utils/colors';
import backgroundHome from '../assets/img/home.jpg';
import { Box, Grid } from "@material-ui/core";


const styles = theme => ({
    root: {
        flexGrow:1,
        backgroundColor: DRAWER_BACKGROUND,
        height: '100vh'
    },
    backgroundImage:{
        marginLeft: '18%',
        width: '82%',
        height:'100vh',
    },
    home:{
        marginLeft: '18%',
        width: '82%',
        height:'100vh',
        backgroundColor: DRAWER_BACKGROUND,
    },
    name: {
        color: YELLOW_TEXT,
        fontFamily: 'Abel',
        fontSize: '30px',
        margin: 0
    },
    occupation:{
        color: YELLOW_TEXT,
        fontFamily: 'Abel',
        fontSize: '41px',
        margin: 0
    },
    homeContent:{
        height: '100vh',
    },
    box: {
        margin: '2px 8px 2px 2px',
        padding: '2px 8px 2px 2px'
    },
    gridContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: DRAWER_BACKGROUND
    },
    clipImage: {
        '&::-webkit-clip-path': 'polygon(0 0, 0 100%, 100% 80%, 100% 0)',
        clipPath: 'polygon(0 0, 10% 100%, 100% 80%, 100% 0)',
        marginLeft:'8%'
      }
      
});

class Home extends Component {

    render(){
        const { classes } = this.props;
        return(
            <div className = {classes.root}>    
                <Grid container spacing = {0} className = {classes.gridContainer}>
                    <Grid item xs = {12}>
                        <Box  className = {classes.box} display = 'flex' justifyContent = 'flex-end' m = {1} p = {1}>
                            <Box p = {1}>
                                <p className = {classes.name}>Juan Pablo Martínez</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs = {12}>
                        <Box  className = {classes.box} display = 'flex' justifyContent = 'flex-end' m = {1} p = {1}>
                            <Box p = {1}>
                                <p className = {classes.occupation}>Software Development</p>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <img className = {classes.clipImage} src = {backgroundHome} alt = 'home' width = '92%' height='100%'/>
            </div>
        )
    }

}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default (withStyles(styles)(Home));