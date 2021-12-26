import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './style.css'
import { useDispatch } from "react-redux";
import {login} from './../../reducers/login'


const Login = () => {
  const dispatch=useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [logResponse, setLogResponse] = useState("");

  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    let role="";
    
    const user=await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      if(user.data.result.role==="61c824b37826606eacd4bf69")
      {
        role="admin";
      }else{
        role="user"
      }
      console.log("user",user.data);
      const data={
        token: user.data.token,
        userId: user.data.result._id,
        userName:user.data.result.username,
        avatar:user.data.result.avatar,
        role:role
    
      }
      dispatch(login(data));
      navigate ("/")
    
  };


  const reg = () => {

    navigate("/Registration");
  };
  return (
    <div className="loginmain">
    <div className="loginform">
      <Container>
        <h1 className="p-3 mb-2 bg-gradient-light text-dark">Login</h1>
        <form action="/login" method="POST">
          <Form.Group className="m-5" controlId="formBasicEmail">
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
            <p>{logResponse}</p>

            <Button className="button" onClick={signin}>
              Login
            </Button>
            <p>Need an Account ?</p>
            <Button
              type="button"
              className="button"
              variant="outline-dark"
              onClick={reg}
            >
              Register
            </Button>
        

            <img className="imggoogle" src="https://th.bing.com/th/id/R.fb13e489b588b98b0d85eb7428a484fe?rik=7sWHBBz%2frsdzkg&pid=ImgRaw&r=0" alt="no img"/>

          </Form.Group>
        </form>
      </Container>
    </div>
    </div>
  );
};

export default Login;