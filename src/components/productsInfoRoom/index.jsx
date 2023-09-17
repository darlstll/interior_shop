import React, { useEffect } from "react";
import s from "./index.module.css";
import { Link} from "react-router-dom";

export const ProductsInfoRoom = () => {

  return (
    <div className={s.product_content}>
        <Link className={s.imgLink} to={`/livingrProduct`}>
          <img src="/src/assets/living-room.jpg" alt="" />
        </Link>
        <Link className={s.imgLink} to={`/kitchenProduct`}>
          <img src="/src/assets/kitchen.jpg" alt="" />
        </Link>
        <Link className={s.imgLink} to={`/diningrProduct`}>
          <img src="/src/assets/dining-room.jpg" alt="" />
        </Link>
        <Link className={s.imgLink} to={`/homeoffProduct`}>
          <img src="/src/assets/home-office.jpg" alt="" />
        </Link>
        <Link className={s.imgLink} to={`/bedrProduct`}>
          <img src="/src/assets/bedroom.jpg" alt="" />
        </Link>
        
      </div>
  );
};
