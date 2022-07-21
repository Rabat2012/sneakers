import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";
import "./Brands.css";

const Adidas = () => {
  const { getProducts, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="disp">
      {products.map(item =>
        item.brand == "Adidas" ? (
          <ProductsCard key={item.id} item={item} />
        ) : null
      )}
    </div>
  );
};

export default Adidas;
