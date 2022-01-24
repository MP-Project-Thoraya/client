import React from "react";
import Services from "./components/Services"
//import Onepageservice from "./components/OnePageService";
import Nav from "./components/Nav"
import Registration from "./components/Registration";
import Login from "./components/Login";
import Userprofile from "./components/Userprofile";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
import Business from "./components/Business";


const App = () => {

  


  return (
    <>
      <div className="mainpage">
        <Nav />
        
        <Routes>
          <Route exact path="/" element={<Login />,<Home />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/myservice" element={ <Login />,<Services/>  }/> */}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path="/myservice" element={<Services  />} />
          <Route exact path="/category" element={<AllServices />} />
          <Route exact path="/business" element={< Business />} />
          <Route exact path="/userprofile" element={<Userprofile />} />
          <Route exact path="/Admindashboard" element={<Dashboard />} />
          <Route
            path="*"
            render={() => {
              return <h1>404</h1>;
            }}
          />
        </Routes>
       
      </div>
      <Footer/>
    </>
  );
};

export default App;
