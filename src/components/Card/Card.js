import React from 'react';
import './Card.css'

const Card = (props) => {
    const {card} = props;
    console.log(card)
    let fee = 0;
    let borrow = 0;
    let bought = 0;
    
    for( const num of card){
        fee = fee + num.Fee;
        
        borrow = borrow + num.borrow_books;
        bought = bought + num.bought_books;
    }
      
    return (
        <div className="card">
            <h1 className="card-title"><u>Collecting the fees   </u></h1>
            <h2><u>Students'</u></h2>
            {
               card.map(nam=> <Student name={nam.name} image={nam.image} Fee={nam.Fee}></Student>) 
            }
            <table className="table">
            <tr><td>Total Borrowing Books:</td> <td>{borrow}</td></tr>
            <tr><td>Total Bought Books:</td> <td>{bought}</td></tr>
            <tr><td><h2>Total Fees Collection:</h2></td> <td><h2>${fee}</h2></td></tr>
            </table>
        </div>
    );
};

const Student = props =>{
    const {name, image, Fee} = props;
    return(
    <div className ="students">
        <img src={image} style={{width:'70px', borderRadius:'50%', display:'inline-block'}} alt="" />

        <div className="name">
            <h4 style={{display:'inline-block', textAlign:'center'}}>Name:  {name}</h4>
            <h4>Fee : ${Fee}</h4>
        </div>
    </div>
    )
}
export default Card;