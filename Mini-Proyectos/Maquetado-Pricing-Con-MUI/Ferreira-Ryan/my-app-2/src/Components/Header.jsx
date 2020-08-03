import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavBut from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
 
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5e35b1',
    },
    secondary: {
      main: '#2e7d32',
    },
  },
});


const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  }));



export default function Pricing() {
const classes = useStyles();
    return (
        <React.Fragment>
          <ThemeProvider theme={theme}>
            <AppBar position="static" color="secondary" elevation={0} className={classes.appBar}>
             <Toolbar className={classes.toolbar}>
               <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                 Matea company
               </Typography>
               <nav>
                 <Link variant="button" color="primary" href="#" className={classes.link}>
                   Features
                 </Link>
                 <Link variant="button" color="primary" href="#" className={classes.link}>
                   Enterprise
                 </Link>
                 <Link variant="button" color="primary" href="#" className={classes.link}>
                   Support
                 </Link>
               </nav>
               <NavBut href="#" color="primary" variant="outlined" className={classes.link}>
                 Login
               </NavBut>
             </Toolbar>
            </AppBar>
          </ThemeProvider>
        </React.Fragment>
      )
}