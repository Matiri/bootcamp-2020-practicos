import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  rootText: {
    paddingTop: '128px',
    paddingBottom: '48px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px',
    textAlign: "center",
    display: 'block',
  },
  pricing: {
    marginBottom: '0.35em',
    fontSize: '3.75rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  body: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '1.5rem',
    lineHeight: 1.334,
    letterSpacing: '0em',
  }
});

export default function Text(){
  const classes = useStyles();

  return(
    <main className = {classes.rootText}>
      <Typography className = {classes.pricing} variant = 'h1'>
        Pricing
      </Typography>
      <Typography className = {classes.body} variant = 'body1'>
        Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.
      </Typography>
    </main>
    
  )
}