import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import StarIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const myStyles = makeStyles((mainStyles) => ({
  link: {
    margin: mainStyles.spacing(1, 1.5)
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: mainStyles.spacing(2)
  }
}));

const columnss = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included', '2 GB of storage', 'Help center access', 'Email support'
    ],
    buttonText: 'Sign up for free',
    buttonStyle: 'outlined'
  }, {
    title: 'Pro',
    observation: 'Most popular',
    price: '15',
    description: [
      '20 users included', '10 GB of storage', 'Help center access', 'Priority email support'
    ],
    buttonText: 'Get started',
    buttonStyle: 'contained'
  }, {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'
    ],
    buttonText: 'Contact us',
    buttonStyle: 'outlined'
  }
]
export default function Pricing() {
  const styles = myStyles();
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {columnss.map((columns) => (
          <Grid item key={columns.title} xs={12} md={4}>
            <Card>
              <CardHeader
                title={columns.title}
                observation={columns.observation}
                titleTypographyProps={{
                align: 'center'
              }}
                observationTypographyProps={{
                align: 'center'
              }}
                action={columns.title !== 'Pro'
                ? null
                : <StarIcon/>}
                />
              <CardContent>
                <div className={styles.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    ${columns.price}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    /mo
                  </Typography>
                </div>
                <ul>
                  {columns
                    .description
                    .map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button fullWidth variant={columns.buttonStyle} color="primary">
                  {columns.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}