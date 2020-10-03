import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { CssBaseline, Box} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { DRAWER_BACKGROUND, SECONDARY_TEXT } from '../utils/colors';
import user from '../assets/img/user.png';
import routes from "../routes";
import { NavLink } from "react-router-dom";

const drawerWidth = '20%';
const drawerHeight = '27%';

const styles = theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: DRAWER_BACKGROUND
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        height: drawerHeight
    },
    headerContent: {
        margin: 'auto',

    },
    itemTextHeader: {
        fontSize: '15px',
        color: 'white'
    },
    items: {
        textAlign: 'center',
        color: SECONDARY_TEXT,
        fontFamily: 'Abel',
        fontSize: '20px',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover':{
            color: '#D8B331'
        },
    },
    itemContent: {
        height: '75px',
    },
    list: {
        width: '100%'
    },
    content: {
        display: 'flex',
        marginTop: '40px',
        width: '100%'
    },
    large: {
        marginLeft: '30px',
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    icon: {
        color: SECONDARY_TEXT,
        minWidth:'36px'
    },
    footer:{
        position:'absolute',
        bottom: 0,
        marginBottom: '30px',
        width: '100%'
    },
    iconContainer:{
        margin:'auto',
        justifyContent: 'center'
    },
    item:{
        textDecoration: 'none',
    },
    active:{
        color:'#D8B331'
    }
})


class DrawerInfo extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div className = {classes.root}>
                <CssBaseline />
                <Drawer 
                    className = {classes.drawer}
                    variant = "persistent"
                    anchor = "left"
                    open = {true}
                    classes = {{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className = {classes.drawerHeader}>
                        <div className = {classes.headerContent}>
                            <Avatar className={classes.large} alt = "user" src = {user} /> 
                        </div>
                    </div>                
                    <div className = {classes.content}>
                        <List className = {classes.list}>
                            {routes.map((prop,i) => {                            
                                return (
                                    <NavLink 
                                        to = {prop.layout + prop.path}
                                        className = {classes.item}                                        
                                        activeStyle={{color:'#ED7602'}}
                                        key = {i}
                                    >
                                        <ListItem className = {classes.itemContent} key = {i}>
                                            <ListItemText disableTypography={true} className = {classes.items} primary = {prop.name} ></ListItemText>
                                        </ListItem>
                                    </NavLink>
                                )
                             }
                            )} 
                        </List>
                    </div>
                    <div className = {classes.footer}>
                        <Box display = 'flex' justifyContent = 'center' m = {1} p  = {1} >
                            <Box p = {1}>
                                <a href = 'https://github.com/jpablomartinez' ><GitHubIcon className = {classes.icon} /></a>
                            </Box>
                            <Box p = {1}>
                                <a href = 'https://www.linkedin.com/in/juan-pablo-mart%C3%ADnez-colombo-9869bb134/'><LinkedInIcon className = {classes.icon} /></a>
                            </Box>
                        </Box>
                    </div>
                </Drawer>
            </div>
        )
    }
}

DrawerInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default (withStyles(styles)(DrawerInfo));
