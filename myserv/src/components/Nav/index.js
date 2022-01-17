import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { IoExit } from "react-icons/io5";
import {FaUsersCog} from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => {
    return state;
  });
  console.log(state.signIn.role,"<<<<<<<<<<<");

  console.log(state, "state");
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(
      logout({ avatar: "", role: "", token: "", userId: "", userName: "" })
    );
    navigate("/Login");
  };

  return (
    <div className="topleft">
      <div className="topcenter">
        <ul className="toplist">
          <i className="logo">
          {state.signIn && (
            <Link to="/">my service </Link> )}
          </i>
          <Link to="">
            <li className="toplistitem">Home</li>
          </Link>
          <Link to="/myservice"> 
            <li className="toplistitem">services</li>
          </Link>

          <Link to="/Login">
            <li className="toplistitem">Log in</li>
          </Link>
          <Link to="/Registration">
            <li className="toplistitem">SignUp</li>
          </Link>

          {state.signIn.role === "admin" && (
          <Link to="/Admindashboard"><FaUsersCog/>
            <li className="toplistitem"></li>
          </Link>
          )}

          <div className="topright">
            <Link to="/userprofile">
              <AiOutlineUser />{" "}
            </Link>
            <button className="lout" onClick={signOut}>
              {" "}
              <IoExit />
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
