import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    containfoot: {
        display:'flex',
        justifyContent:'center',
        alignItems:'baseline'
        

      },
    
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        
        <div className={classes.root} >
            <Grid container  className={classes.containfoot} >
                <Grid item >
                    
                        <Typography component='p' variant='h6'>
                            {props.footOne}
                        </Typography>
                        <Typography component='p' variant='subtitle1' color="textSecondary">
                        {props.footTwo}

                        </Typography>
                        <Typography component='p' variant='subtitle1' color="textSecondary">
                        {props.footThre}

                        </Typography>
                        <Typography component='p' variant='subtitle1' color="textSecondary">
                        {props.footFive}

                        </Typography>
                        <Typography component='p' variant='subtitle1' color="textSecondary">
                        {props.footSix}

                        </Typography>
                    
                </Grid>
               
               
            </Grid>
        
        </div>
        
     );
 }