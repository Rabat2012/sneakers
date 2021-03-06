import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "./Register.css";

const Register = () => {
  const { handleRegister, error, setError } = useContext(authContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  function handleSave() {
    if (
      !email.trim() ||
      !name.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните поля!");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData, navigate);
      console.log(formData);
    }
  }

  useEffect(() => {
    setError(false);
  }, []);

  return (
    <Container className="reg" maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"50px"}>
        <Typography className="margin-reg" variant="h5">
          Register
        </Typography>

        {error ? (
          <Box>
            {error.map((item, index) => (
              <Alert severity="error" key={item + index}>
                {item}
              </Alert>
            ))}
          </Box>
        ) : null}

        <TextField
          className="margin-reg"
          value={email}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
          label="Email"
        />
        <TextField
          className="margin-reg"
          value={name}
          onChange={e => setName(e.target.value)}
          variant="outlined"
          label="Name"
        />
        <TextField
          className="margin-reg"
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="outlined"
          label="Password"
        />
        <TextField
          className="margin-reg"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          variant="outlined"
          label="Password confirmation"
        />
        <Button onClick={handleSave} variant="outlined">
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
