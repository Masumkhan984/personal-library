import React from 'react';
import './Card.css'

const Card = (props) => {
 
        console.log(props)
    return (
        <div className="card">
            <h1 className="card-title"><u>Collecting the fees</u></h1>
            <h2>Total Price:</h2>
            
        </div>
    );
};

export default Card;