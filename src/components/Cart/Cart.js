import React from 'react';
import './Cart.css'
import image from '../../BD.png'

const Cart = (props) => {


    return (
        <div id="cart-bg" className="sticky-top">
            <div>
                <img id="team-image" src={image} alt="" />
            </div>
            <div>
                {
                    props.cart.map((selected) => (
                        <div style={{ display: 'flex', fontSize: '20px', borderTop: '1px solid green' }}>
                            <div style={{ width: '60%' }}>Name: {selected.name}</div>
                            <div style={{ width: '40%' }}>Salary: ৳ {selected.salary}</div>
                        </div>))
                }
                <br />
                <div id='cart-design'>
                    <h3>Selected Player: {props.cart.length}</h3>
                    <h2>Total Budget: ৳ {props.cart.reduce((total, salary) => total + salary.salary, 0)}</h2>
                </div>
            </div>
        </div>
    );
};

export default Cart;