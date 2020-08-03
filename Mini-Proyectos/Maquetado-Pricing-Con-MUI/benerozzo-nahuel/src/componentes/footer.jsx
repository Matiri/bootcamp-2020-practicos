import React from 'react';
import FooterCard from './cardList'

class Footer extends React.Component{
    render(){
        return(
<div>
        <div className="row">

        <div className="col">
        <div>
        <FooterCard 
            itemList1 = "ola" 
            itemList2 = "ola" 
            itemList3 = "ola" 
            itemList4 = "ola" 
            itemList5 = "ola" />
        </div>
        </div>

        <div className="col">
        <div className="pd-16">
        <FooterCard 
            itemList1 = "ola" 
            itemList2 = "ola" 
            itemList3 = "ola" 
            itemList4 = "ola" 
            itemList5 = "ola" />
        </div>
        </div>

        <div className="col">
        <div className="pd-16">
        <FooterCard 
            itemList1 = "ola" 
            itemList2 = "ola" 
            itemList3 = "ola" 
            itemList4 = "ola" 
            itemList5 = "ola" />
        </div>
        </div>

        <div className="col">
        <div className="pd-16">
        <FooterCard 
            itemList1 = "Policity" 
            itemList2 = "Terms of use" 
            itemList3 = "" 
            itemList4 = "" 
            itemList5 = "" />
        </div>
        </div>

    </div>
</div>
        )
    }
}
export default Footer;