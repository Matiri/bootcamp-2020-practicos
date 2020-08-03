import React from 'react';

import '../Styles/MainTitle.css';

class MainTitle extends React.Component {
    render(){
    
        return(
            <div className='container-title'>
                <h1 className='Title'>Pricing</h1>
                <p className='Discription'>Quickly build an effective pricing table for your potential customers with this layout. It's built with default<br></br> Material-UI components with little customization.</p>
            </div>
        )
        
    }
}
export default MainTitle;