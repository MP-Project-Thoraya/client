import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FaComment } from "react-icons/fa";
import { AiOutlineSend,
} from "react-icons/ai";

const BASE_URL = process.env.REACT_APP_BASE_URL;


const Userprofile = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [commments, setcommments] = useState([]);


  const state = useSelector((state) => {
    console.log("state.signIn.userName", state.signIn.userId);
    return state;
  });

  //update User account

  const updateuser = async (e) => {
    e.preventDefault();
    console.log();

    const result = await axios.put(`${BASE_URL}/updateuser/${state.signIn.userId}`,
      {
        email: e.target.email.value,

        username: e.target.username.value,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );

    console.log(result.data);
  };




  ///////////////delete users

  const getUsers = async () => {
    console.log(state.signIn.userId);
    const res = await axios.get(`${BASE_URL}/one_user/${state.signIn.userId}`
    );
    setUsers(res.data);
  };

  const deleteuser = async () => {
    const result = await axios.delete(`${BASE_URL}/delaccount/${state.signIn.userId}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );

    swal({
      text: "Are you sure to delete the Account ?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Account  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Account is safe!");
      }
      navigate("/Login");
    });
  };

  useEffect(() => {
    getUsers();
    getUserpost();
  }, []);





  const getComments = async () => {
    try {
      const resp = await axios.get(`${BASE_URL}/getallcomment`);
      console.log(resp.data);
      setcommments(resp.data.result);
    } catch (err) {
      console.error(err);
    }
  };

  const sendComment = async (e, id) => {
    e.preventDefault();
    try {
      if (state.signIn.userId) {
        console.log("ff");
        const resp = await axios.post(`${BASE_URL}/createcomment`,
          {
            text: e.target.comment.value,
            createby: state.signIn.userId,
            onservicepost: id,
          },
          { headers: { Authorization: `Bearer ${state.signIn.token}` } }
        );
        console.log(resp.data);
        getComments();
      }
    } catch (err) {
      console.error(err);
    }
    e.target.comment.value = "";
  };


  const getUserpost = async () => {
    console.log(state.signIn.userId, "<<<<<<<<<state");
    const res = await axios.get(`${BASE_URL}/getone/${state.signIn.userId}`
    );
    console.log(res.data.result, "ress <<<<<<<<<<<<<<<<<s");
    setPost(res.data.result);
  };

  const deletePost = async (id) => {
    await axios.delete(`${BASE_URL}/deleteposts/${id}`, {
      headers: {
        Authorization: `Bearer ${state.signIn.token}`,
      },
    });

    swal({
      text: "Are you sure to delete the posts ?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Post  has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Post is safe!");
      }
    });
    navigate("/userprofile");
  };

  return (
    <div className="content">
    <div className="userprofile">
      <div className="userprofilewa">
        <div className="userprofiletitle">
          <span className="userprofileupdate">
            welcome {users.username} Update Your Account
          </span>
          <span onClick={deleteuser} className="userprofiledelete">
            <BsFillTrashFill /> Delete Account
          </span>
        </div>
        <form className="settingsform" onSubmit={updateuser}>
          <label>Username </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            defaultValue={users.username}
          />

          <label> Email </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            defaultValue={users.email}
          />

          <label>Password </label>

          <input
            type="password"
            name="password"
            placeholder="Enter new password.."
          />

          <button type="submit" className="userprofilesubmit">
            Update
          </button>
        </form>
        </div>
        </div>
        <div className="post">
            <div className="postwrapper">
              <div className="postleft">
                { post?.map((post, i) => (
                  <>
                    <div className="main1">
                      <div className="posttop">
                     
                     
                       {/* <button
                          onClick={() => {
                            updatpost(post._id);
                          }}
                          className="postright"
                        >
                          <AiTwotoneEdit />
                        </button> */}
                      </div>
                    </div>
                    <div className="spost">
                    <span className="dateP">  {post.createdAt.slice(0, 10)}</span>
                   
{/*
{post.length &&
  (state.signIn.userId === post.createby._id ||
  state.signIn.role === "61c824b37826606eacd4bf69") && ( */}
     
                    <button className="posttop"
                          onClick={() => {
                            deletePost(post._id);
                          }}
                          className="deletebtn1"
                        >
                        
                          <BsFillTrashFill />
                        </button> 
                     
            
                    <h4>by: {post?.createby?.username}</h4>
                    <h3>{post?.title}</h3>
                    <p>{post?.description}</p>
                    
                    {post?.image?.map((i) => (
                      <img className="postimg" src={i} alt="" width="450px" height="300px" />
                    ))}

                    <form
                      className="comments_form"
                      onSubmit={(e) => sendComment(e, post._id)}
                    >
                      <div className="commentTail">
                      <div className="numComment">
                        <h3>
                          {
                            commments?.filter(
                              (i) => i.onservicepost == post._id
                            ).length
                          }
                        <FaComment/>
                        </h3>
                      </div>

                        <textarea

                        className="commenttext "
                          name="comment"
                          placeholder="write here comments"
                          required
                          cols="50"
                         
                        ></textarea>
                        <button className="commentsend" type="submit">
                          <AiOutlineSend />
                        </button>
                        
                      </div>
                      {commments
                        ?.filter((i) => i.onservicepost == post._id)
                        .map((comment, index) => {
                          return (
                            <div className="realComment" key={index}>
                                <div className="realcommentData">
                                  <h5 className="commentauthr">{comment.createby.username}</h5>
                                  <p>{comment.text}</p>
                                  <p className="dateP">
                                    {comment.createdAt.slice(0, 10)}
                                  </p>
                                </div>
                            
                            </div>
                          );
                        })
                        .reverse()}
                    
                    </form>
                    </div>
                  </>
                ))}
                <br />
              </div>
            </div>
          </div>
     
        </div>
  );
};

export default Userprofile;
