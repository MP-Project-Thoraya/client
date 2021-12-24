import React from "react";
//import Services from "./Components/Services"
//import Onepageservice from "./components/OnePageService";
import Nav from "./components/Nav"
import Registration from "./components/Registration";
import Login from "./components/Login";
import Userprofile from "./components/Userprofile";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";

const App = () => {

  return (
    <>
      <div className="mainpage">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/myservice" element={ <Login />,<Services/>  }/> */}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />

          <Route exact path="/userprofile" element={<Userprofile />} />

          <Route
            path="*"
            render={() => {
              return <h1>404</h1>;
            }}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
