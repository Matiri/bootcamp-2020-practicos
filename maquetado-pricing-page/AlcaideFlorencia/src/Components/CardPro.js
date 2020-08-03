import React from 'react';
import '../Styles/cardPro.css';
import image from '../Images/image.png'



class CardPro extends React.Component{
    render(){
        return(
            <div className='container-principal-card'>
                <div className='container_title-pro'>
                        <span>{this.props.titPro}</span>
                        <p>{this.props.subtitlePro}</p>
            
                
                </div>
                
                <div className='containerFree'>
                        <h1 className='price-number'>{this.props.price}<span className='text-diference'>{this.props.priceMed}</span></h1>
                    
                    <div className='container-li'>
                        <li>{this.props.ContentOne}</li>
                        <li>{this.props.ContentTwo}</li>
                        <li>{this.props.ContentThre}</li>
                        <li>{this.props.ContentFour}</li>
                    </div>                
                    <button className='button-pro'>{this.props.ContentButton}</button>
                    
                </div>

            </div>
        
            
            
            
        )
    }
}
export default CardPro;