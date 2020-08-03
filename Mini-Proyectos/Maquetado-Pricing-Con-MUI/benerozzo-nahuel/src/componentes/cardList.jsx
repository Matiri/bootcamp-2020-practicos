import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './../style/cardList.css'

const useStyles = makeStyles({
root: {
    minWidth: 275,
},
bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
},
title: {
    fontSize: 14,
},
pos: {
    marginBottom: 12,
},
});

export default function FooterCard(props) {
const classes = useStyles();


return (
    <div>
        <Card className={classes.root}>
    <CardContent>
        <div className="cardListContent">
            <h6 className="cardListTitle">
                Company
            </h6>
            </div>
            <div className="ulContent">
            <ul className="cardListUl">
                <li><a classname="linkDecNone">{props.itemList1}</a></li>
                <li><a classname="linkDecNone">{props.itemList2}</a></li>
                <li><a classname="linkDecNone">{props.itemList3}</a></li>
                <li><a classname="linkDecNone">{props.itemList4}</a></li>
                <li><a classname="linkDecNone">{props.itemList5}</a></li>
            </ul>
        </div>
        
    </CardContent>
    </Card>
    </div>
    
);
}