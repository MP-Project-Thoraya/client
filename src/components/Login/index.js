import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "./../../reducers/login";
import swal from "sweetalert";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    let role = "";

    console.log(process.env);

    const user = await axios.post(`${BASE_URL}/login`, {
      email: email,
      password: password,
    });
    if (user.data.result.role === "61ee5282ac4b150f68c7374e") {
      role = "admin";
    } else {
      role = "user";
    }
    console.log("user", user.data);
    const data = {
      token: user.data.token,
      userId: user.data.result._id,
      userName: user.data.result.username,
      avatar: user.data.result.avatar,
      role: role,
    };

    dispatch(login(data));
    swal("Succesfully login");
    navigate("/");
  };

  return (
    <div className="loginmain">
      <div className="loginform">
        <Container>
          <form action="/login" method="POST">
            <Form.Group className="m-5" controlId="formBasicEmail">
              <h1 className="p-3 mb-2 bg-gradient-light text-dark">Login</h1>
              <Form.Label>Email address</Form.Label>
              <br />
              <Form.Control
                type="email"
                className="textarea1"
                placeholder="Enter email"
                name="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <br />

              <Form.Label>Password</Form.Label>
              <br />
              <Form.Control
                type="password"
                className="textarea1"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />

              <Form.Check type="checkbox" label="Remeber me" />
            

              <Button className="button" onClick={signin}>
                Login
              </Button>
              <p>
                Need an Account ? <Link to="/Registration">Register</Link>{" "}
              </p>
            </Form.Group>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Login;
