import React from 'react';
import PropTypes from 'prop-types';
import Cardstyle from '../scripts/Card.css';

const Card = ({ title, imgsrc, text1, price, text2, button, classBtnNam, classNam}) => {
    return(
        <div className={classNam}>
            <div className="cardHeader">
                <h2 className="cardHeaderTitle">{title}</h2>
                <img src={imgsrc} className="cardHeaderImg"/>
                <p className="cardHeaderSubtitle">{text1}</p>
            </div>
            <div className="cardContent">
                <h3 className="cardContentPrice">${price}<div className="cardContentPriceMonth">/mo</div></h3>
                <p className="cardContentText">{text2}</p>
                <input type="submit" value={button} href="#" className={classBtnNam}></input>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

Card.defaultProps = {
    title: 'Titulo por defecto',
    text: 'Text por defecto',
}

export default Card;
