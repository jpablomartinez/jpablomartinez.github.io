import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { YELLOW_TEXT, PRIMARY_TEXT } from '../utils/colors';
import { Grid, Divider } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EventIcon from '@material-ui/icons/Event'; 
import WorkIcon from '@material-ui/icons/Work';

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
        fontSize: '22px',
        fontFamily: 'Abel',
        color: PRIMARY_TEXT
    },
    description22:{
        fontSize: '18px',
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
    }
});

class About extends Component {

    render(){
        const { classes } = this.props;
        return (
            <div className = {classes.content}>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {8}>
                        <p className = {classes.title}>Sobre Mi</p>
                    </Grid>
                    <Grid item lg ={12} >
                        <p className = {classes.description}>
                            Desde pequeño que me entusiasma la tecnología y sus infinitos alcances, en particular como la tecnología puede ayudar a las personas dado que he observado 
                            a mi padre toda mi vida como dibuja y arma articulos ortésicos de todo tipo para ayudar a las personas. Es por ello que decidí estudiar una carrera que me permita ayudar a las 
                            personas usando tecnología, en particular como el desarrollo de software puede ayudar a las personas de formas que aún no se han siquiera considerado.
                            Mis intereses se encuentran en el área biomédica, en particular el desarrollo de software en esta área y también la investigación y desarrollo de videojuegos
                            que puedan ayudar a las personas que se encuentran en fisioterapia usando realidad virtual. Dentro de mis hobbies, muy variados por lo demás, se encuentra: Crossfit, Fútbol, practico teclado 
                            de forma autodidacta y soy un gran fanático de todo el universo de Star Wars. 
                        </p>
                    </Grid>
                </Grid>
                <Divider className = {classes.divider}/>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {8}>
                        <p className = {classes.title}>Experiencia Laboral</p>
                    </Grid>
                    <Grid item lg ={12} >
                        <Grid item lg ={12} >
                            <p className = {classes.highlightIcon}><WorkIcon style = {{verticalAlign: 'middle', marginRight: '5px'}}/>2019-actualidad</p>
                            <p className = {classes.description21}>TrainFES</p>
                            <p className = {classes.description20}>Desarrollador de software</p>
                            <p className = {classes.description22}>En TrainFES me desempeño principalmente como desarrollador de las aplicaciones móbiles TrainFES tanto para Android y iOS. 
                            Brindo apoyo en el desarrollo, verificación y validación de ciertas funcionalidades de la API web con la que se comunica las distintas aplicaciones Móbiles de TrainFES. 
                            Además, he instalado y administro una instancia EC2 de AWS en donde se encuentra instalada la plataforma Web de TrainFES (en proceso de validación). Utilizamos las 
                            tecnologías Flutter, NodeJS, MongoDB, AWS</p>
                        </Grid>
                    </Grid>
                    <Grid item lg ={12} >
                        <Grid item lg ={12} >
                            <p className = {classes.highlightIcon}><WorkIcon style = {{verticalAlign: 'middle', marginRight: '5px'}}/>Oct 2018 - Jun 2019</p>
                            <p className = {classes.description21}>Kubernet Ingeniería</p>
                            <p className = {classes.description20}>Desarrollador de software</p>
                            <p className = {classes.description22}>En Kubernet me desempeñé como desarrollador de aplicaciones Android y desarrollador Web. Verifiqué y agregue funcionalidades a la
                            aplicación móvil SmarTags, completé la primera fase de la aplicación móvil SmartProject, la cual contempló el desarrollo de una aplicación Web complementaria. Por último
                            participé en el desarrollo frontend de la primera versión de la aplicación Detectum. Utilicé las tecnologías Java, VueJS, PHP 5.7, MySQL</p>
                        </Grid>
                    </Grid>
                    <Grid item lg ={12} >
                        <Grid item lg ={12} >
                            <p className = {classes.highlightIcon}><WorkIcon style = {{verticalAlign: 'middle', marginRight: '5px'}}/>Oct 2018 - Mar 2019</p>
                            <p className = {classes.description21}>Universidad de Santiago de Chile</p>
                            <p className = {classes.description20}>Ayudante de investigación laboratorio de biomédica, departamento de Informática, Universidad de Santiago de Chile</p>
                            <p className = {classes.description22}>Apoyé en la toma de señales biomédicas, en particular, señales de la hemodinámica cerebral utilizando un Doppler Transcraneal y 
                            un Finapres para medir la presión arterial en distintas posiciones y movimientos (Sit-to-Stand y acostado). Esto fue parte de un proyecto entre el departamento de Ingeniería informática y CETRAM, que tenía como objetivo analizar la autorreguación sanguínea cerebral en pacientes
                            con la enfermedad de Parkinson.</p>
                        </Grid>
                    </Grid>
                    <Grid item lg ={12} >
                        <Grid item lg ={12} >
                            <p className = {classes.highlightIcon}><WorkIcon style = {{verticalAlign: 'middle', marginRight: '5px'}}/>Ene 2018 - Feb 2018</p>
                            <p className = {classes.description21}>Altamarea</p>
                            <p className = {classes.description20}>Desarrollador Web</p>
                            <p className = {classes.description22}>En Altamarea cumplí el rol de desarrollador Web, siendo esta mi primera experiencia laboral (práctica no profesional). Mi rol era
                            llevar los diseños de landing page en formato png a html y modificar los sitios web ya existentes en caso de tener que actualizar la información. Utilicé las tecnologías
                            HTML5, CSS3, Jquery, Bootstrap 3.7, MySQL y PHP 5.7 </p>
                        </Grid>
                    </Grid>
                    <Grid item lg ={12} >
                        <Grid item lg ={12} >
                            <p className = {classes.highlightIcon}><WorkIcon style = {{verticalAlign: 'middle', marginRight: '5px'}}/>Ago 2016 - Dic 2018</p>
                            <p className = {classes.description21}>Universidad de Santiago de Chile, departameto de Ingenieria</p>
                            <p className = {classes.description20}>Ayudante de asignatura Fundamentos de computación y programación (FCYP)</p>
                            <p className = {classes.description22}>Mi rol como ayudante de la asignatura de FCYP fue participar en las clases de ejercicios y ayudar a los alumnos a resolver 
                            problemas básicos de programación usando Python 2.7 (hasta 2017) y Python 3.7 (2018), además de preparar clases de ejercicios extra.</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider className = {classes.divider}/>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {8}>
                        <p className = {classes.title}>Educación</p>
                    </Grid>
                    <Grid item lg ={12} >
                        <p className = {classes.highlightIcon}><EventIcon style = {{verticalAlign: 'middle', marginRight: '5px'}}/>2015-2019</p>
                        <p className = {classes.description21}>Universidad de Santiago de Chile</p>
                        <p className = {classes.description20}>Ingenieria de ejecución en computación e informática</p>
                    </Grid>
                    <Grid item lg ={12} >
                        <p className = {classes.highlightIcon}><EventIcon style = {{verticalAlign: 'middle', marginRight: '5px'}}/>2012-2014</p>
                        <p className = {classes.description21}>Universidad Técnica Fedérico Santa María</p>
                        <p className = {classes.description20}>Ingenieria Civil Informática</p>
                    </Grid>
                </Grid>
                <Divider className = {classes.divider}/>
                <Grid container spacing = {3} className = {classes.gridContainer}>
                    <Grid item lg = {8}>
                        <p className = {classes.title}>Cursos</p>
                    </Grid>
                    <Grid item lg ={12} >
                        {['Python 101 for Data Science', 'Machine Learning with Python', 'Docker Essentials: A developer introduction', 'Introduction to Flutter Development Using Dart'].map((t,i) => (
                            <ListItem className = {classes.item} key = {i}>
                                <ListItemText disableTypography={true} className = {classes.itemText}>{i+1}. {t}</ListItemText>
                            </ListItem>
                        ))}
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default (withStyles(styles)(About));