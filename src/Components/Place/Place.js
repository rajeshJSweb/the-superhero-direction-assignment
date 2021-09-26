import React from 'react';
import './Place.css';

const Place = (props) => {
    const {placeName,cityName,country,img,travelCost,distance,star} = props.place
    return (
        <div className='place'>
            <img src={img} alt="" />
            <h2 >Travel Cost: ${travelCost}</h2>
            <div className='detail'>
                <h2 className='placeTitle'>{placeName}</h2>
                <p className='location'>{cityName},{country}</p>
                <h5 className='location'>Distance:  {distance} Ratting: {star}</h5>
            </div>
            <div>
                <div>
                    <button onClick={()=>props.handleAddToCart(props.place)} className='regular-button'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Place;