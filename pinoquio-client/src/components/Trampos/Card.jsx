import React from 'react';

import './Card.css';

const Card = props => (
    <div className="Card">
        <p className="Card_IsCompany">
            {props.isACompany ? "#empresa" : "#empregador"}
        </p>
        <div className="Card_Details">
            <p className="Card_Trampo">{props.trampo}</p>
            <p className="Card_Quem">{props.quem}</p>
            <p className="Card_Quando">{props.quando}</p>
            <p className="Card_Local">End: {props.onde}</p>
            <p className="Card_Contato">Contato: {props.contato}</p>
        </div>
        <p className="Card_Paycheck">{props.pagamento}</p>
    </div>
);

export default Card;