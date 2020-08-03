import React from 'react';

//  IMPORTAR COMPONENTES
import CardList from './CardList';
class Footer extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                    <   CardList FooterTitle="Company" firstElement="Team" secondElement="History" thirdElement="Contact us" fourthElement="Locations" />
                    </div>
                    <div className="col-3">
                        <CardList FooterTitle="Features" firstElement="Cool Stuff" secondElement="Random Feature" thirdElement="Team Feature" fourthElement="Developer stuff" fifthElement="Another one" />
                    </div>
                    <div className="col-3">
                        <CardList FooterTitle="Resources" firstElement="Resource" secondElement="Resource name" thirdElement="Another resource" fourthElement="Final resource" />
                    </div>
                    <div className="col-3">
                        <CardList FooterTitle="Legal" firstElement="Privacy policy" secondElement="Terms of use" />
                    </div>
                    <CardList copyright="Copyright © Your Website 2020."/>
                </div>
            </div>
        )
    }
}

export default Footer;