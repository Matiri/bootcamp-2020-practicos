import React from 'react';
import {AppBar, Toolbar, Typography, Button, Link, Box} from '@material-ui/core';
import ButtonLogin from './Button';

const NavBar = (props) =>  {
    return (
        <AppBar position="relative" color="transparent" className="nav-bar">
            <Typography variant="h6" color="white">
                {props.nameCompany}
            </Typography>
            <div className="nav-bar-buttons">
                <Link className="nav-bar-links" component="button" variant="body2">
                    {props.linkOne}
                </Link>
                <Link  className="nav-bar-links" component="button" variant="body2">
                    {props.linkTwo}
                </Link>
                <Link className="nav-bar-links" component="button" variant="body2">
                    {props.linkThree}
                </Link>
                <ButtonLogin />
            </div>
        </AppBar>
    );
}

export default NavBar

