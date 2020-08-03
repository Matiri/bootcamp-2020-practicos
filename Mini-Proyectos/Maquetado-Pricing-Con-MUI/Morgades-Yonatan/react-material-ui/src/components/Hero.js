import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const myStyles = makeStyles((heroStyle) => ({
  heroContent: {
    padding: heroStyle.spacing(8, 0, 6)
  }
}));

export default function Hero() {
  const styles = myStyles();

  return (
    <Container maxWidth="sm" className={styles.heroContent}>
      <Typography component="h1" variant="h2" align="center">
        Pricing
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Container>
  );
}
