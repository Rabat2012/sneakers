import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {


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
