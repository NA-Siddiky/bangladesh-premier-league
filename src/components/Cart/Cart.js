import React from 'react';

const Cart = (props) => {

    return (
        <div>

            {
                props.cart.map((selected) => (<div>
                    <h1>Total Added Player: {selected.name}</h1>
                    <p>Salary: {selected.salary}</p>

                </div>))
            }
            <h1>Total Selected Player: {props.cart.length}</h1>
            <h2>Total Budget: {props.cart.reduce((total, salary) => total + salary.salary, 0)}</h2>
        </div>
    );
};

export default Cart;