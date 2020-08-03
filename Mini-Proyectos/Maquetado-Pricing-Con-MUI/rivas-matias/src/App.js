import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends React.Component{
  render(){
    return(
      <Button variant = 'outlined' color = 'primary' href = 'https://github.com/Matiri'>
        Mi github
      </Button>
    )
  }
}
export default App;
