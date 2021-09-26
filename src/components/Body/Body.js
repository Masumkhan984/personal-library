import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Member from '../Member/Member';
import './Body.css'

const Body = () => {
    const [members, setBooks]= useState([]);
    const [card, setCard] = useState([]);

    useEffect(()=>{
        fetch('./members.json')
        .then(res => res.json())
        .then(data=> setBooks(data))
    }, [])
    const handleFees = member => {
        const newCard = [...card, member];
        setCard(newCard)
    }
    return ( 
        <>
        <h1 className="title">Total Members:{members.length} </h1>
        <div className="body-container">
           <div className="member-container">
            {
                members.map(member=><Member 
                    member ={member}
                    handleFees={handleFees}></Member>)
            }
           </div>
             <div className="fees-container">
                <Card card ={card}></Card>
             </div>
        </div>
        </>
    );
};

export default Body;