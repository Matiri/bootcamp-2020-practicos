import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './../style/card.css'

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

export default function SimpleCard(props) {
const classes = useStyles();


return (
    <div className="card">

    <Card className={classes.root}>
    
    <CardContent>

        <div className="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-alignCenter MuiTypography-displayBlock">
        <span className="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-alignCenter MuiTypography-displayBlock titleCard">{props.title}</span>
        </div>
        <div className="MuiCardContent-root pd-0">
            <div className="jss7 priceCard">
                <h2 className="MuiTypography-root MuiTypography-h3 MuiTypography-colorTextPrimary inline-block">
                    ${props.price}
                    <span className="MuiTypography-root MuiTypography-h6 MuiTypography-colorTextSecondary">
                        /mo
                    </span>
                </h2>

            </div>
            <ul className="decNone cardList">

                <li className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter">
                    {props.itemList1} users included
                </li>

                <li className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter">
                    {props.itemList2} GB of storage
                </li>

                <li className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter">
                    Help center acces
                </li>

                <li className="MuiTypography-root MuiTypography-subtitle1 MuiTypography-alignCenter">
                    {props.itemList3} Email support
                </li>

            </ul>
        </div>
        <div className="MuiCardActions-root MuiCardActions-spacing">
            <Button className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-fullWidth buttonCard "  tabIndex="0" type="button">
                <span className="MuiButton-label">{props.buttonContent}</span>
                <span className="MuiTouchRipple-root"></span>
            </Button>
        </div>
        

    </CardContent>
    </Card>
    </div>
);
}