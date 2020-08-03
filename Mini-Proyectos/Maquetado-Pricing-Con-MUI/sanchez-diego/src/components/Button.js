import React from 'react';
import { Button } from '@material-ui/core';
import '../styles/Button.css'

class Boton extends React.Component{
    render(){
        return(
            <div className="button__box">
                <p>Go to my GitHub</p>
                <Button variant="contained" color="secondary" href="https://github.com/DiegoSanchez11">{this.props.buttonValue}</Button>
            </div>
        )
    }
}

export default Boton;