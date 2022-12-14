import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // for(let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population
    // }

    // The reduce() method returns a single value: the function's accumulated result.
    // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    // summation
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    
    return (
        <div>
            <h2>This is Cart {cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    )
};

export default Cart;