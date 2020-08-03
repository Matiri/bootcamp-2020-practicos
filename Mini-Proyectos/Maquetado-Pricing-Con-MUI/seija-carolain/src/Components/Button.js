import React from 'react';
import {Button} from '@material-ui/core';
import {MakeStyles, makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles({
 ejemplo: {
     background: "primary",
     borderRadius: 3,
     borderColor:"primary"
 }
})

function ButtonLogin  () {
//lamo la contsnte que cree
    const classes = useStyle()
    return (
        <div>
            <Button className={classes.ejemplo} variant="text" color="primary" align="left">
              LOGIN
            </Button>
        </div>

    );
}
export default ButtonLogin