import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titleC:{
        marginTop: theme.spacing(15),
    }
}));

export default function MainTitle() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.titleC} variant="h2" align="center" color="textPrimary" gutterBottom>
            Pricing
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary">
            Quickly build an effective pricing table for your potential<br/> customers with this layout. It's built with default<br/> Material-UI components with little customization.

            </Typography>

        </div>
     );
 }