import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Place from '../Place/Place';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useState([]);
    const [title, setTitle] = useState([]);
    useEffect(() => {
        fetch('/places.JSON')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const handleAddToCart = place => {
        const newCart = [...cart, place];
        const newTitle = [...title, place]
        setCart(newCart)
        setTitle(newTitle)
    }

    return (
        <div className='place-container'>
            <div className='places'>
            {
                    places.map(place => <Place
                        key = {place.key}
                        place={place}
                        handleAddToCart = {handleAddToCart}
                    ></Place>)
            }
            </div>
            <div className='cart'>
                <h3 className='cart-item'>Make Package</h3>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Places;