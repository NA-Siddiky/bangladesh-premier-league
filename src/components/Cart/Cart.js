import React from 'react';

const Cart = (props) => {
    

    return (
        <div>

            {
                props.cart.map((selected) => (<div>
                    <h3>Player: {selected.name}</h3>
                    <p>Salary: {selected.salary}</p>
                </div>))
            }
            <br />
            <div>
                <h3>Selected Player: {props.cart.length}</h3>
                <h2>Total Budget: ৳ {props.cart.reduce((total, salary) => total + salary.salary, 0)}</h2>
            </div>

        </div>
    );
};

export default Cart;