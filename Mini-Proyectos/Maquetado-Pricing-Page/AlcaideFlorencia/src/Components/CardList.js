import React from 'react';
import '../Styles/CardList.css';

class CardList extends React.Component{
    render(){
        return(
            <div className='content'>

                <ul className='List'>
                    <li>
                        <a className='title' href='#'>{this.props.Title}</a>
                        
                    </li>
                    <li>
                        <a className='CardList-a' href='#'>{this.props.LineOne}</a>
                    </li>
                    <li>
                        <a className='CardList-a' href='#'>{this.props.LineTwo}</a>
                    </li>
                    <li>
                        <a className='CardList-a' href='#'>{this.props.LineThre}</a>
                    </li>
                    <li>
                        <a className='CardList-a' href='#'>{this.props.LineFour}</a>
                    </li>
                    
                    <li>
                        <a className='CardList-a' href='#'>{this.props.LineFive}</a>
                    </li>

                </ul>
                
                
            </div>
        )
    }
}
export default CardList;
