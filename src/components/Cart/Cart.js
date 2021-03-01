import React from 'react';
import './Cart.css'

const Cart = (props) => {


    return (
        <div className="sticky-top">

            {
                props.cart.map((selected) => (<div>
                    <h3>Player: {selected.name}</h3>
                    <p>Salary: {selected.salary}</p>
                </div>))
            }
            <br />
            <div className='cart-design'>
                <h3>Selected Player: {props.cart.length}</h3>
                <h2>Total Budget: ৳ {props.cart.reduce((total, salary) => total + salary.salary, 0)}</h2>
            </div>

        </div>
    );
};

export default Cart;