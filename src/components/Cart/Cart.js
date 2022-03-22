import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h5>Order Summery</h5>
              <p>Selected Items: {cart.length}</p> 
        </div>
    );
};

export default Cart;