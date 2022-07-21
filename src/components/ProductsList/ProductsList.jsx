import { Box, Container, Pagination, Slider, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [search, setSearch] = useState(
    searchParams.get("search") ? searchParams.get("search") : ""
  );
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      search: search,
      page: currentPage,
      price_from: price[0],
      price_to: price[1],
    });
  }, [search, currentPage, price]);

  return (
    <Container>
      <Box className="search-box">
        <TextField
          className="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          label="Search..."
          variant="filled"
        />
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"start"}>
        {products.map(item => (
          <ProductsCard key={item.title} item={item} />
        ))}
      </Box>
      <Slider
        className="slider"
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={(e, value) => {
          setPrice(value);
        }}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
        step={10}
      />
      <Box>
        <Pagination
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          count={pages}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
