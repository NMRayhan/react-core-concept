import React from 'react';

const Cart = (props) => {
    const cart = props.Carts
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population
    }
    return (
        <div>
            <h1>Added Population: {totalPopulation}</h1>
        </div>
    );
};

export default Cart;