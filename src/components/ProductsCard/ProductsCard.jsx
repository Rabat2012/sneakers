import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { productsContext } from "../../contexts/productsContext";
import { cartContext } from "../../contexts/cartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { favContext } from "../../contexts/FavoriteContext";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductsCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct, toggleLike, toggleFavorites } =
    React.useContext(productsContext);
  const { addToFav, checkShoeInFav } = React.useContext(favContext);
  const { addToCart, checkProductInCart } = React.useContext(cartContext);
  const [shoesState, setShoesState] = React.useState(checkShoeInFav(item.id));
  const [productsState, setProductsState] = React.useState(
    checkProductInCart(item.id)
  );
  // React.useEffect(() => {
  //   checkShoeInFav(item.id);
  // }, []);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(item);

  return (
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardHeader
        action={
          <IconButton onClick={() => navigate(`/products/${item.id}`)}>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="product"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Title: {item.title} <br />
          Price: ${item.price} <br />
          Brand: {item.brand} <br />
          Type: {item.sneakers_type} <br />
          Sizes: {item.size} <br />
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            addToFav(item);
            setShoesState(checkShoeInFav(item.id));
          }}>
          <BookmarkIcon color={shoesState ? "secondary" : "primary"} />
        </IconButton>
        <IconButton onClick={() => toggleLike(item.id)}>
          {item.like}
          <FavoriteIcon color={item.like ? "error" : "primary"} />
        </IconButton>
        {item.author ? (
          <div>
            <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteProduct(item.id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ) : null}
        <IconButton
          onClick={() => {
            addToCart(item);
            setProductsState(checkProductInCart(item.id));
          }}>
          <AddShoppingCartIcon
            color={productsState ? "secondary" : "primary"}
          />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description: {item.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
