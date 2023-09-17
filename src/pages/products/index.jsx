import axios from "axios";
import React from "react";
import { ProductsInfo } from "../../components/productsInfo";

export const Products = () => {

  return (
    <div style={{ marginBottom: 30 }}>
      <div className="container">
          <ProductsInfo/>
      </div>
    </div>
  );
};
