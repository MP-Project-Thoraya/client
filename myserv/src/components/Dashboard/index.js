import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./style.css";
import Nav from "./../../components/Nav"
import {BsFillTrashFill} from "react-icons/bs";

const MySwal = withReactContent(Swal);


const Dashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [pageLoader, setPageLoader] = useState(true);

  const state = useSelector((state) => {
    return {

      token: state.signIn.token,
    };
  });

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:5000/allusers`, {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    });
    setUsers(res.data);
    setPageLoader(false);
  };






  
  const deleteUser = async (id) => {
    await axios.delete(
      `http://localhost:5000/delusers/${id}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
  
    navigate('/userprofile');
  };

  return (
    <>
      {state.token ? (
        <>
         
          {pageLoader ? (
            <div className="loaderWrapper">
             
            </div>
          ) : (
            <div className="dashboardWrapper">
              <div className="ItemsCon">
                 
                {users ? (
                    
                  <ul className="list"> 
                    {users.map((user,i) => (
                      <div key={user._id} className="listItem">

                          <li>{i + 1}  </li>
                          <li> {user.username}  <hr /></li> 
                        <li>{user.email}  <hr /></li>
                      
                        <div>
                        
                          <button
                            onClick={() => deleteUser(user._id)}
                            className="delete"
                          >
                            <BsFillTrashFill/>
                          </button>
                          <hr />
                        </div>
                      </div>
                    ))}
                  </ul>
                ) : (
                  <h2></h2>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="centerWrapper">
          <div className="signupLoginTitle">
            <h1>please sign up </h1>
          </div>
          <div className="signupLoginButtons">
            <button onClick={() => navigate("/login")}>Login</button>
       
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;