import React from 'react'
import { AddRemove } from '../UI/button/AddRemove';
import s from "./index.module.css"

export const KitchenProduct = ({product, addToOrder}) => {
    return (
      <div className={s.card}>
      <div className={s.card_header}>
        <img src={product.img} alt={product.name} className={s.card_img} />
      </div>
      <div className={s.card_body}>
        <h4>{product.name}</h4>
        <p>{product.price}$ USD</p>
        <div className={s.add_to_card} onClick={() => addToOrder(product)}>+</div> 
      </div>
    </div>
    );
  };

