import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const RegisterSuccess = () => {
  useEffect(() => {
    setSuccess(true);
  }, []);

  return (
    <Container>
      <Box>
        <Typography>
          <Link to="/login">войти</Link> в
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterSuccess;
