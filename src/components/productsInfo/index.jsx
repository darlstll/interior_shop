import React, { useEffect } from "react";
import s from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";

export const ProductsInfo = () => {
  const navigate = useNavigate();

  // const goToExactProduct = () => navigate(`/exactProduct/${data.id}`);

  return (
    <div className={s.product_content}>
        <Link className={s.imgLink} to={`/decorProduct`}>
          <img src="/src/assets/decor_home.jpg" alt="" />
        </Link>
        <Link className={s.imgLink} to={`/furnitProduct`}>
          <img src="/src/assets/furniture_home.jpg" alt="" />
        </Link>
        <Link className={s.imgLink} to={`/bedProduct`}>
          <img src="/src/assets/bed&bath_home.jpg" alt="" />
        </Link>
        <Link className={s.imgLink} to={`/gardenProduct`}>
          <img src="/src/assets/garden&outdoor_home.jpg" alt="" />
        </Link>

        {/* <button className={s.watch} onClick={goToExactProduct}>
          Смотреть тайтл
        </button> */}
      </div>
  );
};
