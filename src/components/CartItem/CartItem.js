import React from 'react';

const CartItem = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.item.plant.plantImage} alt={props.item.plant.name} style={{ width: 100, height: 100 }}></img>
      <div className="card-body">
        <p>{props.item.plant.name}</p>
        <p>Price:&nbsp;{props.item.plant.price}</p>
        <p>Description:&nbsp;{props.item.plant.description}</p>
        <div className="cart-btn">
          <p><button className="btn-primary btn" onClick={() => props.handleReduce(props.item.plant._id)}> - </button></p>
          <p className="item-qty">Qty:&nbsp;{props.item.quantity}</p>
          <p><button className="btn-primary btn" onClick={() => props.handleIncrease(props.item.plant._id)}> + </button></p>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 