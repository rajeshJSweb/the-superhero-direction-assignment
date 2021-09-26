import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart} = props;
    let total = 0;
    for (const place of cart) {
        total = total + place.travelCost;
    }

    let newTitle = '';
    for (const place of cart) {
        newTitle = place.placeName;
    }

    return (
        
        <div className='cartContainer'>
            <p>Selected Place:  <span className='count'>{props.cart.length}</span></p>
            <div className='amountCount'>
                <h1 className='totalCost'>Total Cost: ${total}</h1>
                <small className='tax'>Tax incl. price for 1 person</small>
                
            </div>
            <div>
            <li>{ newTitle}</li>
            <button className='regular-button'>Book Now</button>
           </div>
        </div>
    );
};

export default Cart;