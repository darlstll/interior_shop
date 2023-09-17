import React from 'react'
import s from "./index.module.css";

export const Order = ({ productId, onDelete}) => {
  console.log(productId);

  return (
    <div>
    <div className={s.card}>
      <div className={s.card_header}>
        <img src={productId.img} alt={productId.name} className={s.card_img} />
      </div>
      <div className={s.card_body}>
        <h5>{productId.name}</h5>
        <p>{productId.price}$ USD</p>
      </div>
      <button className={s.btn} onClick={() => onDelete(productId)}>Delete</button>
    </div>
    </div>
  )
}
