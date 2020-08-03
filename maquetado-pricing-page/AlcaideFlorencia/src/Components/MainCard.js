import React from 'react';
import Card from './Card';
import CardPro from './CardPro';




class MainCard extends React.Component{
    render(){
        return(
            <div>
                <div className='ContentPrincipal'>
                    <Card title='Free'
                    price='$0'
                    priceMed='/mo'
                    ContentOne='10 users included'
                    ContentTwo='2 GB of storage'
                    ContentThre='Help center access'
                    ContentFour='Email support'
                    ContentButton='sing up for free'/>
                
                    <CardPro  titPro='Pro'
                    subtitlePro='Most popular'
                    price='$15'
                    priceMed='/mo'
                    ContentOne='20 users included'
                    ContentTwo='10 GB of storage'
                    ContentThre='Help center access'
                    ContentFour='Priority email support'
                    ContentButton='get started'/>
            

                    <Card title='Enterprise'
                    price='$30'
                    priceMed='/mo'
                    ContentOne='50 users included'
                    ContentTwo='30 GB of storage'
                    ContentThre='Help center access'
                    ContentFour='Phone & email support'
                    ContentButton='contact us'/>
                </div>

            </div>

        )
    }
}

export default MainCard;