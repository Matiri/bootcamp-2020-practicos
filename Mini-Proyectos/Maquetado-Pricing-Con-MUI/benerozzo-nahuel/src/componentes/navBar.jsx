import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb(props) {
return (
    <Breadcrumbs aria-label="breadcrumb">
    <Link color="textSecondary" href="#" >
        {props.itemNav1}
    </Link>
    <Link color="textSecondary" href="#" >
        {props.itemNav2}
    </Link>
    <Link
        color="textSecondary"
        href="#">
            
        {props.itemNav3}
    </Link>
    </Breadcrumbs>
);
}