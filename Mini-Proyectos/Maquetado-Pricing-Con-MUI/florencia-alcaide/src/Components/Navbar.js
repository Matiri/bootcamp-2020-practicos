import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkOne:{
      marginRight:theme.spacing(2),
  },
 linkTwo:{
    marginRight:theme.spacing(2),
    },
linkThre:{
        marginRight:theme.spacing(2),
    },
button: {
      marginLeft:theme.spacing(2),
  },
  
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  color='default' elevation={0} borderBottom={1} >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Link className={classes.linkOne} variant="button"  color="textPrimary" href="#">
                FEATURES
          </Link>
          <Link className={classes.linkTwo} color="textPrimary" href="#" variant="button" >
                ENTERPRISE
          </Link>
          <Link  className={classes.linkThre} variant="button" color="textPrimary" href="#">
                SUPPORT
          </Link> 
          <Button className={classes.button} variant="outlined" color="primary">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

