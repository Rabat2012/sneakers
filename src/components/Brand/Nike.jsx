import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./Brands.css";

const Nike = () => {
  const { getProducts, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="disp">
      {products.map(item =>
        item.brand == "Nike" ? <ProductsCard key={item.id} item={item} /> : null
      )}
    </div>
  );
};

export default Nike;
