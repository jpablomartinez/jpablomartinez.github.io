import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { YELLOW_TEXT, PRIMARY_TEXT } from '../utils/colors';
import { Grid, Divider} from "@material-ui/core";
import Circular from '../components/circular';

const styles = theme =>({
    content:{
        marginLeft: '25%',
        marginRight: '7%'
    },
    gridContainer:{
        marginTop: '0.5%',
        padding: '10px',
        marginBottom:'20px'
    },
    title:{
        fontSize: '46px',
        fontFamily: 'Abel',
        color: PRIMARY_TEXT,
        marginBottom: '10px',
        marginLeft:'0px'
    },
    description:{
        fontSize: '20px',
        fontFamily: 'Abel',
        color: PRIMARY_TEXT
    },
    description20:{
        fontSize: '20px',
        fontFamily: 'Abel',
        color: PRIMARY_TEXT
    },
    description21:{
        fontSize: '21px',
        fontFamily: 'Abel',
        color: PRIMARY_TEXT
    },
    divider:{
        backgroundColor:'rgba(117,117,117,0.32)',
        width: '100%', 
        height:'1.5px'
    },
    item:{
        paddingLeft:'0'
    },
    itemText:{
        color: PRIMARY_TEXT,
        fontSize: '20px',
        fontFamily: 'Abel'
    },
    highlightIcon:{
        color: YELLOW_TEXT,
        fontSize: '18px',
        fontFamily: 'Abel',
    },
    languajeContent:{
        display: 'inline-flex',
        margin:'5px'
    },
    skillValues:{
        margin: 'auto'
    },
    languaje:{
        fontFamily: 'Abel',
        fontSize: '17px',
        color: PRIMARY_TEXT,
        marginTop:'0px',
        marginRight: '30px',
        marginBottom: '0px',
        width: '100px'
    }
});

class Skills extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div className = {classes.content}>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {12}>
                        <p className = {classes.title}>Lenguajes de programación</p>
                    </Grid>
                    <Grid item lg = {4}>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Python</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>C</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>C++</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item lg = {4}>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Java</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>PHP</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Javascript</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item lg = {4}>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>C#</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>R</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg ={12} >
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Dart</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider className = {classes.divider}/>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {12}>
                        <p className = {classes.title}>Bases de datos</p>
                    </Grid>
                    <Grid item lg ={4} >
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>MySQL</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>PostgreSQL</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>MongoDB</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider className = {classes.divider}/>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {12}>
                        <p className = {classes.title}>Frameworks y bibliotecas</p>
                    </Grid>
                    <Grid item lg ={4} >
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Flutter</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>ReactJS</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>VueJS</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>NodeJS</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item lg ={4} >
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Android Studio</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>ExpressJS</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Mongoose</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Sequelize</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item lg ={4} >
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Material-UI</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Vuetify</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Bootstrap 3.7 (4.x)</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider className = {classes.divider}/>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {12}>
                        <p className = {classes.title}>Otros</p>
                    </Grid>
                    <Grid item lg ={4} >
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>HTML 5</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>CSS</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Photoshop</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item lg ={4} >
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Arduino</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Raspberry pi</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg = {12}>
                            <div className = {classes.languajeContent}>
                                <p className = {classes.languaje}>Unity</p>
                                <div className = {classes.skillValues}>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {true}/>
                                    <Circular full = {false}/>
                                    <Circular full = {false}/> 
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default (withStyles(styles)(Skills));