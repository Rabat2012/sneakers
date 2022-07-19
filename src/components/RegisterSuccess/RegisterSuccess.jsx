import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Container>
      <Box>
        <Typography>
          Вы успешно зарегистрировались, можете
          <Link to="/login"> войти</Link> в свой аккаунт
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterSuccess;
