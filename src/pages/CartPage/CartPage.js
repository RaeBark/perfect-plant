import React from 'react';
import Cart from '../../components/Cart/Cart';
import './CartPage.css'

const CartPage = (props) => {
    return (
        <div className="CartPage">
            {props.cart &&
                <Cart cart={props.cart} handleRemoveItem={props.handleRemoveItem} handleAddItem={props.handleAddItem}/>
            }
        </div>
    )
}

export default CartPage; 