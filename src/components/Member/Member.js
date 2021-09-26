import React from 'react';
import './Member.css'
const Member = (props) => {
    console.log(props.member)
    const {name, Fee, borrow_books, bought_books, image, ocupation,Favourite_books} = props.member;
    return (
        <div className="member">
            <img src={image} alt="" />
            <h2>Name: {name}</h2>
            <p3>Ocupation: {ocupation}</p3>
            <p><small>Favourite Books: {Favourite_books}</small></p>
            <p>Borrowing Books: {borrow_books}</p>
            <p>Bought Books : {bought_books}</p>
            <h3>Monthly Fees: {Fee}</h3>
            <button onClick={()=>props.handleFees(props.member)} className="btn">Take The Fees</button>
        </div>
    );
};

export default Member;