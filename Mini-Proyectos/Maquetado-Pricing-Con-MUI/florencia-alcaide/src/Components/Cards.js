import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  header: {
    backgroundColor:
       theme.palette.grey[200],
       
      
  },
  pricingNum:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  separacion:{
    marginRight:theme.spacing(1),
    marginLeft:theme.spacing(1),

    
  },
  cardMargin:{
    marginTop:theme.spacing(3),
  },
  cardContainer:{
    display:'flex',
    justifyContent:'center',
    marginTop: theme.spacing(6),
    marginRight:theme.spacing(1),
    marginLeft:theme.spacing(1),

  },
 

}));

export default function Cards(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();


  return (
    
    <Grid width="100%" className={classes.cardContainer} container>
       
        <Grid item className={classes.separacion} lg={7 }>
                <Card>
                    <CardHeader
                    className={classes.header}
                    title={props.title}
                    subheader={props.subtitle}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    />
                    <CardContent display="flex" justifyContent="center">
                    <div className={classes.pricingNum}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                        {props.numPrice}
                        </Typography>
                        <Typography  variant="h6" color="textSecondary">
                        /mo
                        </Typography>
                    </div>
                        <Typography  component="p" variant="subtitle1" align="center"  >
                        {props.liOne}
                        </Typography>
                        <Typography component="p" variant="subtitle1" align="center"  >
                        {props.liTwo}
                        </Typography>
                        <Typography component="p" variant="subtitle1" align="center"  >
                        {props.liThre}
                        </Typography>
                        <Typography component="p" variant="subtitle1" align="center"  >
                        {props.liFour}
                        </Typography>
                    </CardContent>
                    
                    <Button fullWidth variant='outlined' color="primary">
                        {props.button}
                    </Button>
                    
                </Card>

          
        </Grid>
        
    </Grid>
    
    );
}