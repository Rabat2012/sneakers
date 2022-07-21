import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, error, setError } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email, navigate);
    }
  }
  useEffect(() => {
    setError(false);
  }, []);

  return (
    <Container className="login" maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
        <Typography className="margin-login" variant="h5">
          Login
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        <TextField
          className="margin-login"
          value={email}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
        />
        <TextField
          className="margin-login"
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
          type="password"
        />
        <Button variant="outlined" onClick={handleSave}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
