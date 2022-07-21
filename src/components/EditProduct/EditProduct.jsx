import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../contexts/productsContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PhotoCamera } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    getBrands,
    brands,
    getTypes,
    types,
    oneProduct,
    getOneProduct,
    updateProduct,
  } = useContext(productsContext);
  const [title, setTitle] = useState("");
  const [size, setSize] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [sneakersType, setSneakersType] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    getBrands();
    getTypes();
  }, []);
  useEffect(() => {
    getBrands();
    getTypes();
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setSize(oneProduct.size);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setBrand(oneProduct.brand);
      setSneakersType(oneProduct.sneakers_type);
    }
  }, [oneProduct]);
  function handleSave() {
    let editedProduct = new FormData();
    editedProduct.append("title", title);
    editedProduct.append("size", size);
    editedProduct.append("description", description);
    editedProduct.append("price", price);
    editedProduct.append("brand", brand);
    editedProduct.append("sneakers_type", sneakersType);
    if (image) {
      editedProduct.append("image", image);
    }
    updateProduct(id, editedProduct, navigate);
  }
  // console.log(categories);
  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant="h6">Edit product</Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          type={"number"}
          label="Size"
          variant="outlined"
          value={size}
          onChange={e => setSize(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          type={"number"}
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brand}
            label="Brand"
            onChange={e => setBrand(e.target.value)}>
            {brands.map(item => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sneakersType}
            label="Type"
            onChange={e => setSneakersType(e.target.value)}>
            {types.map(item => (
              <MenuItem key={item.name} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <PhotoCamera />
          </IconButton>
          {image ? <Typography variant="span">{image.name}</Typography> : null}
          <br />
          {image ? <Typography variant="span">{image.size}</Typography> : null}
          <br />
          {image ? <Typography variant="span">{image.size}</Typography> : null}
        </Box>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default EditProduct;
