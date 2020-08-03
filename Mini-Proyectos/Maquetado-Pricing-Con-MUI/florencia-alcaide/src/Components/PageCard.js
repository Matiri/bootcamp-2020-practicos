import React from 'react';
import Cards from './Cards'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,},

    card:{
        display:'flex',
        
        
       
    }
    
}));


export default function PageCard() {
    const classes = useStyles();
        return(
            <div  className={classes.card}>
            <Cards  
            title='Free'
            numPrice='$0'
            liOne='10 users included'
            liTwo='2 GB of storage'
            liThre='Help center access'
            liFour='Email support'
            button='sing up for free'/>

            <Cards
            title='Pro'
            subtitle='Most popular'
            numPrice='$15'
            liOne='20 users included'
            liTwo='10 GB of storage'
            liThre='Help center access'
            liFour='Priority email support'
            button='get started'/>

            <Cards
            title='Enterprise'
            numPrice='$30'
            liOne='50 users included'
            liTwo='30 GB of storage'
            liThre='Help center access'
            liFour='Phone & email support'
            button='contact us'/>

            
            </div>
        );
    }


