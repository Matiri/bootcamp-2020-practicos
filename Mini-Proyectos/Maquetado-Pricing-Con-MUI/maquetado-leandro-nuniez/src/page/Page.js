import React from 'react';
import { Button } from '@material-ui/core';

class Page extends React.Component {
    render(){
        return(
            <div>
                <Button variant="contained" color="secondary" href="https://github.com/Leandro-matea">My Github</Button>
            </div>
        )
    }
}

export default Page;