import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from './Footer'
import {Typography} from '@material-ui/core'
import {Link} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,},

    card:{
        display:'flex',
        marginTop:theme.spacing(15),
        
       
    }
    
}));


export default function PageFooter(props) {
    const classes = useStyles();
        return(
<div>
<div  className={classes.card}>
              <Footer
    footOne='Company'
    footTwo='Team'
    footThre='History'
    footFour='Contact us'
    footFive='Locations'/>
    <Footer
    footOne='Features'
    footTwo='Cool stuff'
    footThre='Random feature'
    footFour='Team feature'
    footFive='Developer stuff'
    footSix='Another one'/>
    <Footer
    footOne='Resources'
    footTwo='Resource'
    footThre='Resource name'
    footFour='Another resource'
    footFive='Final resource'/>
    <Footer
    footOne='Legal'
    footTwo='Privacy policy'
    footThre='Terms of use'
    />


 </div>
        <div>
            <Typography  align="center" variant='subtitle1' color="textSecondary">
            Copyright © <Link color="textSecondary">Your Website</Link> 2020.
            </Typography>
        </div>
 </div>

        );
    }


