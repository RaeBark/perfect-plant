import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
  return (
    <div className="CartItem  card">
      <img className="card-img-top" src={props.item.plant.plantImage} alt={props.item.plant.name} style={{ width: 190, height: 250 }}></img>
      <div className="card-body">
        <p>{props.item.plant.name}</p>
        <p>Price:&nbsp;{props.item.plant.price}</p>
        <div className="cart-btn">
          <p><button className="btn" onClick={() => props.handleRemoveItem(props.item.plant._id)}> - </button></p>
          <p className="item-qty">Qty:&nbsp;{props.item.quantity}</p>
          <p><button className="btn" onClick={() => props.handleAddItem(props.item.plant._id)}> + </button></p>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 