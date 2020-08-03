import  React  from 'react';
import '../styles/Text.css';

class Text extends React.Component{
  render(){
    return(
      <div className = 'paragraph'>
        <h1 className = 'pricing'>Pricing</h1>
        <p>Quickly build an effective pricing table for your potential
          customers with this layout. It's built with default
          Material-UI components with little customization.
        </p>
      </div>
    )
  }
}

export default Text;
