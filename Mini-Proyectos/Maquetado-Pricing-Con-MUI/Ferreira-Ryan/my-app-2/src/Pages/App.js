import React from 'react';
import ReactDOM from 'react-dom';

// Components import

import HomeText from '../Components/HomeText.jsx';
import Cards from '../Components/Cards.jsx';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';

function App() {
    return (
        ReactDOM.render(
            <React.StrictMode>
                <Header />
                <HomeText />
                <Cards />
                <Footer />
            </React.StrictMode>,
            document.getElementById('root')
        )
    )
}
export default App;