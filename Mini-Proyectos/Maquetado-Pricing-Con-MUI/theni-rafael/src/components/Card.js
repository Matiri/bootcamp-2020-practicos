import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Button} from '@material-ui/core';

const Card1 = ({ title, imgsrc, text1, price, text2, button, classBtnNam, classNam, vari}) => {
    return(
        <Card className={classNam}>
            <CardContent>
                <div className="cardHeader">
                    <h2 className="cardHeaderTitle">{title}</h2>
                    <img src={imgsrc} className="cardHeaderImg"/>
                    <p className="cardHeaderSubtitle">{text1}</p>
                </div>
                <div className="cardContent">
                    <h3 className="cardContentPrice">${price}<span className="cardContentPriceMonth">/mo</span></h3>
                    <ul className="cardContentText">
                        {text2}
                    </ul>
                    <Button color="primary" type="submit" variant={vari} className={classBtnNam} size="large" href="#">{button}</Button>
                </div>
                
            </CardContent>
        </Card>
    )
}

export default Card1;
