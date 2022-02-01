import './style.css'
import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist"
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Registration = () => {
  const [usernameReg, setusernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const navigate = useNavigate();

  const [regResponse, setregResponse] = useState("");

  const reg = (e) => {
    e.preventDefault();
    console.log(usernameReg);
    axios.post(`${BASE_URL}/signup`, {
        username: usernameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response.data);
        if(!response.data._message){
          navigate("/LOGIN");
        }
      });
  };

  const goLogin = () => {
    navigate("/login");
  };
  return (

    <div className="signupmain">
    <div className="signup">
    <Container>
   
      <form action="/register" method="POST">
        <Form.Group className="mt-5 mx-5" controlId="formBasicUsername">
           <h1 className="">Sign Up</h1>
            <br />
          <Form.Label>Username</Form.Label>
          <br />
          <Form.Control
            type="text"
            name="name"
            required
            onChange={(e) => {
              setusernameReg(e.target.value);
            }}
            className="textarea1"
              placeholder="Enter Username"
          />
        </Form.Group>
        <Form.Group className="m-5" controlId="formBasicEmail">


            
          <Form.Label>Email address</Form.Label>
          <br />
          <Form.Control
          className="textarea1"
            type="email"
            placeholder="Enter email"
            name="email"
            required
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mt-5 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            className="textarea1"
            placeholder="Enter Password"
            name="email"
            required
            onChange={(e) => {
              setpasswordReg(e.target.value);
            }}
          />
        </Form.Group>

        <p className="mx-5 mt-4 text-danger ">{regResponse}</p>
        <Button
          className="buttonr"
          type="submit"
          onClick={reg}
        >
          Register
        </Button>
        <Button className="buttonr"
          type="button"
         
          variant="outline-dark"
          onClick={goLogin}
        >
          Login
        </Button>

<br/>
<br/>
        <PasswordChecklist
				rules={["minLength","specialChar","number","capital",]}
				minLength={7}
				value={passwordReg}
			
				messages={{
					minLength: "Password has more than 7 characters.",
					specialChar: "Password has special characters.",
					number: "Password has a number.",
					capital: "Password has a capital letter.",
				
				}}
			/>


      </form>
    </Container>
    </div>
    </div>
  );
};

export default Registration; 