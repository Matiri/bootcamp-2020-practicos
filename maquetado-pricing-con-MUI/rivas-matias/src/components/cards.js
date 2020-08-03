import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  rootCards: {
    maxWidth: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  cardBasic: {
    textAlign: 'center',
    display: 'inline-block',
    flexGrow: 0,
    width: '32%',
    flexBasis: '33.333333%',
  },

  cardHeader: {
    backgroundColor: '#616161',
    color: '#ffffff',
    display: 'flex',
    padding: 16,
  },

  cardContent: {
    backgroundColor: '#424242',
    color: '#ffffff',
  },

  cardBasicPrice: {
    color: '#ffffff',
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em',
  },

  cardBasic_perMonth: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: 'rgba(255, 255, 255, 0.7)',
  },

  cardBasicOffer: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  cardBasic_Button: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  cardPro: {
    textAlign: 'center',
    display: 'inline-block',
    margin: 20,
    flexGrow: 0,
    width: '30%',
    flexBasis: '33.333333%',
  },

  cardHeaderPro: {
    backgroundColor: '#616161',
    color: '#ffffff',
    display: 'flex',
    padding: 16,
  },
  cardHeaderPro_subheader: {
    color: 'rgba(255, 255, 255, 0.7)'
  }
});

export default function Cards(){
  const classes = useStyles();

  return(
    <main className = {classes.rootCards}>
      <Card className = {classes.cardBasic}>
        <CardHeader
          className = {classes.cardHeader} 
          title = 'Free'
        />
        <CardContent className = {classes.cardContent}>
          <Typography className = {classes.cardBasicPrice}>
            $0<span className = {classes.cardBasic_perMonth}>/mo</span>
          </Typography>
          <Typography className = {classes.cardBasicOffer}>
            <ul className = {classes.cardBasicOffer}>
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Help center access</li>
              <li>Email support</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions className = {classes.cardContent}>
          <Button className = {classes.cardBasic_Button} variant = 'outlined' color = 'primary'>
            SIGN UP FOR FREE
          </Button>
        </CardActions>
      </Card>


      <Card className = {classes.cardPro}>
        <CardHeader 
          className = {classes.cardHeaderPro}
          title = 'Pro'
          subheader = {<span className = {classes.cardHeaderPro_subheader}>Most popular</span>}
        />
        <CardContent className = {classes.cardContent}>
          <Typography className = {classes.cardBasicPrice}>
            $15<span className = {classes.cardBasic_perMonth}>/mo</span>
          </Typography>
          <Typography className = {classes.cardBasicOffer}>
          <ul className = {classes.cardBasicOffer}>
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Help center access</li>
              <li>Priority email support</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions className = {classes.cardContent}>
          <Button className = {classes.cardBasic_Button} variant = 'contained' color = 'primary'>
            GET STARTED
          </Button>
        </CardActions>
      </Card>


      <Card className = {classes.cardBasic}>
        <CardHeader
          className = {classes.cardHeader} 
          title = 'Enterprise'
        />
        <CardContent className = {classes.cardContent}>
          <Typography className = {classes.cardBasicPrice}>
            $30<span className = {classes.cardBasic_perMonth}>/mo</span>
          </Typography>
          <Typography className = {classes.cardBasicOffer}>
            <ul className = {classes.cardBasicOffer}>
              <li>50 users included</li>
              <li>30 GB of storage</li>
              <li>Help center access</li>
              <li>Phone & email support</li>
            </ul>
          </Typography>
        </CardContent>
        <CardActions className = {classes.cardContent}>
          <Button className = {classes.cardBasic_Button} variant = 'outlined' color = 'primary'>
            CONTACT US
          </Button>
        </CardActions>
      </Card>
    </main>
  )
}
