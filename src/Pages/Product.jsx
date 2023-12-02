import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
