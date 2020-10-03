import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Divider} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root:{
        maxWidth: 345,
    },
    media: {
        paddingTop: '56.25%'
    },
    divider:{
        backgroundColor:'rgba(117,117,117,0.32)',
        width: '100%', 
        height:'1.5px'
    },
    chips:{
        marginTop: '10px',
        marginBottom: '10px',
    },
    chip:{
        margin: '5px'
    }
});


class ProjectContent extends Component {

    render(){
        
        const { classes } = this.props;

        return (
            <Card className = {classes.root}>
                <CardMedia className = {classes.media} image = {this.props.image} title = {this.props.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{this.props.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{this.props.description}</Typography>
                    <p></p>
                    <Divider className = {classes.divider}/>
                    <div className = {classes.chips}>
                        {this.props.chips.map((t,i) => {
                            return <Chip key = {i} label = {t} className = {classes.chip}></Chip>
                        })}
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Ver más</Button></CardActions>
            </Card>
        )
    }

}


export default (withStyles(styles)(ProjectContent));