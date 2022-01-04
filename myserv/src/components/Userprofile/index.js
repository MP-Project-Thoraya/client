import React from "react";
import "./style.css";
import {BsPersonSquare, BsFillTrashFill} from "react-icons/bs";

import {useSelector} from 'react-redux'

const Userprofile=()=> {




    const state=useSelector((state)=>{
      console.log("state.signIn.userName",state.signIn.userName)
        return state;
    });

  
    return (
      <div className="userprofile">
         <div className="userprofilewa">
         <div className="userprofiletitle">
                 <span className="userprofileupdate">Update Your Account</span>
                 <span className="userprofiledelete"> <BsFillTrashFill/>  Delete Account</span>
              </div>
              <form className="settingsform">
              <label>Profile Picture </label>
              <form className="settingspp"></form>
                <img className="imgpr" src="https://th.bing.com/th/id/OIP.aSjx4cNX2_-wtxl2rcc5XQHaLY?pid=ImgDet&rs=1" alt="no img"/>
   
  {/* <label htmlFor="fileInput"> <i className="settingPPIcon"> <BsPersonSquare/></i> </label> */}
  <input type="file" id="finleinput" style={{display:"none"}}/>
  
  <label>Username </label>
  <input type="text" placeholder="username" />
  
  <label> Email </label>
  <input type="email" placeholder="example@gmail.com" />
  
  <label>Password </label>
  
  <input type="password"  />
  
  <button className="userprofilesubmit">Update</button>
  
        </form>
        </div>
      
      </div>
    );
  }
  
  export default Userprofile;
  