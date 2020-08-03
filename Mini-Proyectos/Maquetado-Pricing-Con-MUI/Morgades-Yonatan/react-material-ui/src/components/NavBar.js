import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import 'fontsource-roboto';

const myStyles = makeStyles((navStyles) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    borderBottom: '1px solid'
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  title: {
    flexGrow: 1
  },
  link: {
    margin: navStyles.spacing(1, 1.5)
  }
}));

export default function NavBar() {
  const styles = myStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={styles.title}>
          Company name
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="#" className={styles.link}>
            Features
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={styles.link}>
            Enterprise
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={styles.link}>
            Support
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={styles.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
