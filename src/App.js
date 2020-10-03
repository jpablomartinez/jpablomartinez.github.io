import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import DrawerInfo  from './components/drawer';
import { Switch, Route, Redirect } from "react-router-dom";
import routes from './routes';
import './App.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    marginTop: '30px',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
  },
  headerCard: {
    padding: '16px'
  },
  titleCard: {
    color: '#757575',
    fontSize: '30px'

  }

})

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if(prop.layout === '/app'){
        return (
          <Route 
            path = {prop.layout + prop.path}
            component = {prop.component}
            key = {key}
          />
        );
      }
      return null;
    })}
    <Redirect from = '/app' to = '/app/home' />
  </Switch>
)

class App extends Component {

  render(){
    const {classes } = this.props;
    return(
      <div className = {classes.root}>
        <DrawerInfo />
        {switchRoutes}
      </div>
    )
  }


}


App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(styles)(App));
