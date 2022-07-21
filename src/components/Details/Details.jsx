import { Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loader from "../Loader/Loader";
import Comments from "../Comments/Comments";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);
  if (!oneProduct) {
    return <Loader />;
  }
  console.log(oneProduct);
  return (
    <Container>
      <Typography variant="h5">Title: {oneProduct.title}</Typography>
      <Typography variant="h5">Price: {oneProduct.price}</Typography>
      <Typography variant="h5">
        Description: {oneProduct.description}
      </Typography>
      <Typography variant="h5">Type: {oneProduct.sneakers_type}</Typography>
      <img className="img-det" src={oneProduct.image} alt="product" />
      <Comments comments={oneProduct.comments} />
    </Container>
  );
};

export default Details;
