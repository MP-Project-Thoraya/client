import React from "react";
import { Link } from "react-router-dom";
import './style.css'


const NavBar = () => {
  return (
    <div className="top">
    <div className="topleft">
        <i className="logo">my service-Busines</i>
  
   
    <div className="topcenter">
    <ul className="toplist">
    <Link to="">
        <li className="toplistitem">Home</li>
      </Link>
      <Link to="/myservice">
        <li   className="toplistitem"  >services</li>
      </Link>
  
      <Link to="/Login">
        <li className="toplistitem"  >Log in</li>
      </Link>
      <Link to="/Registration">
        <li  className="toplistitem" >SignUp</li>
      </Link>


      <Link to="/logout">
        <li  className="toplistitem" >Log Out</li>
      </Link>
     
      <div className="topright">
      <Link to="/userprofile">
<img className="topimg" src="https://www.osmpic.com/wp-content/uploads/2019/03/PicsArt_03-21-10.30.59-901x1024.jpg"  alt="no img" />
</Link>  
        </div>

    </ul>
    </div>
    </div>
    </div>
    
  );
};

export default NavBar;