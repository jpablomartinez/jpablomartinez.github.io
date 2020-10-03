import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { YELLOW_TEXT, PRIMARY_TEXT } from '../utils/colors';
import {Grid} from "@material-ui/core";
import ProjectContent from '../components/projectContent';

import PSHC from '../assets/img/PSHC.png';
import noImage from '../assets/img/noImage.png';
import Mendeleev from '../assets/img/Mendeleev.png';
import TOEC from '../assets/img/toec3.png';

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
        fontSize: '20px',
        color: PRIMARY_TEXT,
        marginTop:'0px',
        marginRight: '30px',
        marginBottom: '0px',
        width: '100px'
    }
});

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    title: 'PSHC',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    date: 'yyyy-mm-dd',
                    chips: ['ReactJs', 'R', 'OpenCPU', 'PHP', 'Docker', 'MySQL'],
                    image: PSHC
                    
                },
                {
                    title: 'Proyecto 2',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    date: 'yyyy-mm-dd',
                    chips: ['Flutter', 'Hive'],
                    image: {Mendeleev}
                },
                {
                    title: 'Proyecto 3',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                    date: 'yyyy-mm-dd',
                    chips: ['Flutter','Hive'],
                    image: {noImage}
                },
            ]
        }
    }
    

    render(){
        const { classes } = this.props;
        return (
            <div className = {classes.content}>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {12}>
                        <p className = {classes.title}>Proyectos</p>
                    </Grid>
                    <Grid item lg = {4}>
                        <Grid item lg ={12} >
                            <ProjectContent image = {PSHC} title = 'PSHC' description = 'Aplicación Web desarrollada para el laboratorio de biomédica del departamento de Informática de la Universidad de Santiago de Chile. Su uso esta destinado para el preprocesamiento de señales de la hemodinámica cerebral.' chips = {['ReactJs', 'R', 'OpenCPU', 'PHP', 'Docker', 'MySQL']} />
                        </Grid>
                    </Grid>
                    <Grid item lg = {4}>                        
                        <Grid item lg ={12} >
                            <ProjectContent image = {Mendeleev} title = 'Periodic Table For All' description = "Aplicación Móvil que le permite ver la tabla períodica de elementos. En ella puede ver las propiedades más usadas en el estudio básico de la química (estudiantes). Próximamente para Android" chips = {['Flutter', 'Hive']}/>
                        </Grid>
                    </Grid>
                    <Grid item lg = {4}>    
                        <Grid item lg ={12} >
                           <ProjectContent image = {noImage} title = 'My CrossTimer' description = 'Aplicación Móvil que le permite programar y administrar los distintos cronómetros para su rutina de ejercicios (Cuenta regresiva, Tabata, Emom, entre otros)' chips = {['Flutter']}/>
                        </Grid>
                    </Grid>
                    <Grid item lg = {4}>    
                        <Grid item lg ={12} >
                           <ProjectContent image = {TOEC} title = 'TO en tu casa' description = 'Aplicación Móvil de apoyo para programa de terapia ocupacional (@to.entucasa) para niños con capacidades diferentes' chips = {['Flutter', 'Hive', 'NodeJs', 'MongoDB']}/>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default (withStyles(styles)(Projects));