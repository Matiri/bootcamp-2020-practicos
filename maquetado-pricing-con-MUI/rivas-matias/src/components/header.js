import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  rootHeader: {
    position: 'sticky',
    color: '#ffffff',
    backgroundColor: '#212121',
    borderBottom: '1px rgba(255, 255, 255, 0.1) solid',
  },
  compName: {
    flexGrow: 1, 
  },
  links: {
    marginRight: 8,
    marginLeft: 8,
    color: '#ffffff',
    fontWeight: '500',
    letterSpacing: '0.02857rem',
    fontSize: '0.875rem',
  },
});


export default function Header(){
  const classes = useStyles(); 

  return (
    <div>
      <AppBar className = {classes.rootHeader}>
        <Toolbar>
          <Typography className = {classes.compName} variant = 'h6'>
            Company name
          </Typography>
            <Link className = {classes.links} href = '#'>
              FEATURES
            </Link>
            <Link className = {classes.links} href = '#'>
              ENTERPRISE
            </Link>
            <Link className = {classes.links} href = '#'>
              SUPPORT
            </Link>
          <Box mx = {1.5} my = {1}>
            <Button variant = 'outlined' color = 'primary' href = '#'>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}