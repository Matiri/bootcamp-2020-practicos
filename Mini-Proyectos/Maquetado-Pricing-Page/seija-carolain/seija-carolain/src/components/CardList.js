import React from 'react';

//creo mi componente
 class CardList extends React.Component{
     render(){
         return (
            <div class="CardListFooter ml-5">
                <h6 class="CardList-Title">{this.props.CardListTitle}</h6>
                <ul class="List">
                    <li>
                    <a class="CardList-Link" href="#">{this.props.contentOne}</a>
                    </li>
                    <li>
                    <a class="CardList-Link" href="#">{this.props.contentTwo}</a>
                    </li>
                    <li><a class="CardList-Link" href="#">{this.props.contentThre}</a></li>
                    <li>
                    <a class="CardList-Link" href="#">{this.props.contentFour}</a>
                    </li>
                    <li>
                    <a class="CardList-Link" href="#">{this.props.contentFive}</a>
                    </li>
                </ul>
            </div>
         );
     }
 }
 export default CardList;