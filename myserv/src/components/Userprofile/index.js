import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Userprofile = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const state = useSelector((state) => {
    console.log("state.signIn.userName", state.signIn.userId);
    return state;
  });


  //update User account

  const updateuser = async (e) => {
    e.preventDefault();
    console.log();

    const result = await axios.put(
      `http://localhost:5000/updateuser/${state.signIn.userId}`,
      {
        email: e.target.email.value,
        password: e.target.password.value,
        username: e.target.username.value,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );

    console.log(result.data);
  };

  ///////////////delete users

  const getUsers = async () => {
    console.log(state.signIn.userId);
    const res = await axios.get(`http://localhost:5000/one_user/${state.signIn.userId}`);
    setUsers(res.data);
  };

  const deleteuser = async () => {
    const result = await axios.delete(`http://localhost:5000/delaccount/${state.signIn.userId}`, {
      headers: {
        Authorization: `Bearer ${state.signIn.token}`,
      },
    });
    navigate('/Login')
  };

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    console.log(users);
  }, [users])
  return (
    <div className="userprofile">
      <div className="userprofilewa">
        <div className="userprofiletitle">
          <span className="userprofileupdate">Update Your Account</span>

          <span onClick={deleteuser} className="userprofiledelete">
            <BsFillTrashFill /> Delete Account
          </span>
        </div>
        <form className="settingsform" onSubmit={updateuser}>
          <label>Profile Picture </label>
          <form className="settingspp"></form>
          <img
            className="imgpr"
            src="https://th.bing.com/th/id/OIP.aSjx4cNX2_-wtxl2rcc5XQHaLY?pid=ImgDet&rs=1"
            alt="no img"
          />

          {/* <label htmlFor="fileInput"> <i className="settingPPIcon"> <BsPersonSquare/></i> </label> */}
          {/* <input type="file" id="finleinput" style={{ display: "none" }} /> */}

          <label>Username </label>
          <input type="text" placeholder="username" name="username" defaultValue={users.username}/>

          <label> Email </label>
          <input type="email" placeholder="example@gmail.com" name="email"  defaultValue={users.email}/>

          <label>Password </label>

          <input type="password" name="password" placeholder="Enter new password.."/>

          <button
            type="submit"
            className="userprofilesubmit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Userprofile;
