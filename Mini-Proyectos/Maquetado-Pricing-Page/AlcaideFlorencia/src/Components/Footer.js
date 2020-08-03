import React from 'react';
import CardList from './CardList';
import '../Styles/Card.css'

    


class Footer extends React.Component{
    render(){
        return (
            <div className='FooterPag'>

                <div className='List'>
                    <CardList
                    Title='Company'
                    LineOne='Team'
                    LineTwo='History'
                    LineThre='Conctact us'
                    LineFour='Locations'
                    
                    />
                    <CardList
                    Title='Feature'
                    LineOne='Cool stuff'
                    LineTwo='Random feature'
                    LineThre='Team feature'
                    LineFour='Devolper stuff'
                    LineFive='Another one'
                    />
                    <CardList
                    Title='Resources'
                    LineOne='Resource'
                    LineTwo='Resource name'
                    LineThre='Another resouce'
                    LineFour='Final resource'/>

                    <CardList
                    Title='Legal'
                    LineOne='Privacy policy'
                    LineTwo='Terms of use'
                    />
                </div>
                <p className='copyright'>Copyright © <a href='#'>Your Website</a> 2020.</p>
            </div>



        );
    }
}
export default Footer;