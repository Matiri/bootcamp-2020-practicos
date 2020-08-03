import React from 'react';

//importo boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

//creo mi componente
 class Card extends React.Component{
     render(){
         return (
            <div class={this.props.classMain}>
                <div class={this.props.nametitle}>
                    <div>
                        <div class="divicon">
                             <span class="icon"><svg width="1.5em" height="0.2.5em" viewBox="0 0 16 16" class="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                             <path className="ml-5 mr-5" fill-rule="evenodd" d={this.props.iconstart}/>
                            </svg></span>
                        </div>
                        <div>
                            <h3 class="TitleCard-Text">{this.props.CardName}</h3>
                        </div>
                    </div>
                    <p class={this.props.classContentParraph}>{this.props.contentParraph}</p>
                </div>
                <p class="Price"><span class="Price-number">{this.props.contentPrice}</span>/mo</p>
                <ul class="DescriptionCard">
                     <li>{this.props.contentDescOne}</li>
                     <li>{this.props.contentDescTwo}</li>
                     <li>{this.props.contentDescThre}</li>
                     <li>{this.props.contentDescFour}</li>
                </ul>
                <button class={this.props.class}>{this.props.content}</button>
            </div>
         );
     }
 }
export default Card;