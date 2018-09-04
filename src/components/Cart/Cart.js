import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartItems from '../CartItems/CartItems';

const Cart = (props) => {
    let total = props.cart.items.reduce((tot, item) => tot + (item.plant.price * item.quantity), 0);
    return (
        <div className="Cart">
            <h1>Cart</h1>
            <CartItems 
            handleRemoveItem={props.handleRemoveItem} 
            handleAddItem={props.handleAddItem}
            cart={props.cart} />
            <h3>Total: ${total}</h3>
            <Link to='/checkout' className="Cart-Checkout-Button">checkout</Link>
        </div>
    );
}

export default Cart; 