import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <div className>
        <NavBar />
        <Hero />
        <Card />
        <Footer />
      </div>
    )
  }
}
export default App