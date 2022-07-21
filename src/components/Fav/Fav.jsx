import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { favContext } from "../../contexts/FavoriteContext";

export default function Fav() {
  const navigate = useNavigate();
  const { getFav, fav } = React.useContext(favContext);
  React.useEffect(() => {
    getFav();
  }, []);
  console.log(fav);
  return fav ? (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fav.shoes.map(item => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {item.item.title}
                </TableCell>
                <TableCell align="right"> {item.item.price}</TableCell>
                <TableCell align="right">{item.item.size}</TableCell>
                <TableCell align="right">{item.item.sneakers_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  ) : (
    <Loader />
  );
}
