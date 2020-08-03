import React from 'react';
import logo from './logo.svg';
import './App.css';

class Formulario extends React.Component{
  constructor(props){
    super(props)
    this.state = {username : 'Cuando escribas en el input, este texto va a cambiar!'};
  }
  cambiarNombre = (event) => {
    this.setState({username: event.target.value});
  }
  render(){
    return(
      <div>
        <form>
          <input
            type="text"
            placeholder="Ingresa texto"
            onChange={this.cambiarNombre}
          />
        </form>
        <h5>Valor del Input: {this.state.username}</h5>
      </div>
    );
  }
}


export default Formulario;
