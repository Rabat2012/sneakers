import { Link } from "react-router-dom";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Link to="/adidas">
        <Button className="qwerty">Adidas</Button>
      </Link>
      <Link to="/asics">
        <Button>Asics</Button>
      </Link>
      <Link to="/nike">
        <Button>Nike</Button>
      </Link>
    </Stack>
  );
}
