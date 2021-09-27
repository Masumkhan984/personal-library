import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import './Member.css'
import Rating from 'react-rating';
const Member = (props) => {
    const {name, Fee, borrow_books, bought_books, image, ocupation,Favourite_books} = props.member;
    const element = <FontAwesomeIcon icon={faHandHoldingUsd} />
    return (
        <div className="member">
            <div>
            <img src={image} alt="" />
            <h2>Name: {name}</h2>
            <p3>Ocupation: {ocupation}</p3>
            <p><small>Favourite Books: {Favourite_books}</small></p>
            <table className="table">
                  <tr><td>Borrowing Books: </td><td>{borrow_books}</td></tr>
                  <tr><td>Bought Books : </td><td>{bought_books}</td></tr>
                  <tr><td><h3>Monthly and Deu Fees:</h3></td><td><h3>${Fee}</h3></td></tr>
            </table>
            </div>
           <Rating
            emptySymbol="far fa-star"
            fullSymbol="far fa-star fa-2x"
            readonly></Rating>
            <br />
            <br />
           <div>
            <button onClick={()=>props.handleFees(props.member)} className="btn">{element}Take The Fees</button>
            </div>
        </div>
    );
};

export default Member;