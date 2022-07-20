import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsList = () => {
  const { getProducts, products } = useContext(productsContext);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  // console.log(products, pages);

  return (
    <Container>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"start"}>
        {products.map(item => (
          <ProductsCard key={item.title} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsList;
