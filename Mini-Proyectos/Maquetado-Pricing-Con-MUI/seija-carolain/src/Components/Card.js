import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { purple } from '@material-ui/core/colors';
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 3,
    width: 270,
    height: 350,
    textAlign: 'center',
    borderColor: "gray",
  },
  header: {
    textAlign: 'center',
    spacing: 10,
    background: "gray",
  },
  list: {
    padding: '20px',
  },
  button: {
    margin: theme.spacing(1),
   
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  buttonDif: {
    color: "white",
  
  },
  palette: {
    primary: {
      primary: "#ba000d",
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    neutral: {
      main: '#424242',
    },
    
  },
  
 
}));

export const PricingCardDemo = React.memo(function PricingCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={props.titleCard} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {props.pricing}<span>/mo</span>
        </Typography>
        <div className={classes.list}>
          <Typography align="center">{props.descriptionOne}</Typography>
          <Typography align="center">{props.descriptionTwo}</Typography>
          <Typography align="center">{props.descriptionThree}</Typography>
          <Typography align="center">{props.descriptionFour}</Typography>
          <Typography align="center">{props.descriptionFive}</Typography>
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained"  className={classes.button} color="primary">
          {props.textButton}
        </Button>
      </CardActions>
    </Card>
  );
});

export default PricingCardDemo