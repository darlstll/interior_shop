import axios from "axios";
import React from "react";
import { ProductsInfoRoom } from "../../components/productsInfoRoom";

export const ProductsRoom = () => {

  return (
    <div style={{ marginBottom: 30 }}>
      <div className="container">
          <ProductsInfoRoom/>
      </div>
    </div>
  );
};
