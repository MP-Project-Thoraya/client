import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import ShowMore from 'react-show-more-button';

import {
  AiTwotoneEdit,
  AiOutlineClose,
  AiOutlineSend,
  AiFillDelete,
} from "react-icons/ai";
import swal from "sweetalert";
import { FaComment } from "react-icons/fa";
import "./style.css";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { IoMdImage } from "react-icons/io";


const BASE_URL = process.env.REACT_APP_BASE_URL;
const Services = () => {
  let navigate = useNavigate();

  const [addService, setaddService] = useState(false);
  const [showComment, setshowComment] = useState("show comments");
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [post, setPost] = useState([]);
  const [commments, setcommments] = useState([]);
  const newPost = async (e) => {
    e.preventDefault();
    const result = await axios.post(`${BASE_URL}/create_post`,
      {
        //userId: user._id,
        description: e.target.description.value,
        title: e.target.title.value,
        image: images,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );
    console.log(result.data);
    getPosts();
    setaddService(false);
    swal("Posted successfully", "success");
  };

  const state = useSelector((state) => {
    return state;
  });

  const uploadPictures = (e) => {
    let image = e.target.files[0];
    const dataType = image.name.match(/\.(jpe?g|png|gif)$/gi);
    if (image == null || dataType == null) return;
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadImamge = uploadBytesResumable(storageRef, image);
    uploadImamge.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadImamge.snapshot.ref).then((url) => {
          setImages([...images, url]);
        });
      }
    );
  };

  useEffect(() => {
    setProgress(0);
  }, [images]);

  const getPosts = () => {
    try {
      axios.get(`${BASE_URL}/getall`).then((result) => {
        console.log(result.data);
        setPost(result.data.result);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updatpost = async (e) => {
    e.preventDefault();

    const result = await axios.put(`${BASE_URL}/update/${state.signIn.userId}`,
      {
        description: e.target.description.value,
        image: e.target.image.value,
        title: e.target.title.value,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );

    console.log(result);
  };

  useEffect(() => {
    getPosts();
    getComments();
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

  ///////////////////////

  const deletecomment = async (id) => {
    try {
      const resp = await axios.delete(`${BASE_URL}/deletecomment/${id}`,
        {
          headers: { Authorization: `Bearer ${state.signIn.token}` },
        }
      );
      getComments();
    } catch (err) {
      console.error(err);
    }
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
    navigate("/myservice");
  };
  ////////////////////////

  return (
   
    <div className="con">
       
      <div className="sharewapper">
        <div className="descr">
          <h3>
            Describe your service here. What makes it great? Use short catchy
            text to tell people what you offer...?
          </h3>

          <button className="bottonadd" onClick={() => setaddService(true)}>
            <IoIosAddCircle />
          </button>
        </div>
        {addService ? (
          <div className="share">
            <form onSubmit={newPost} className="writepost">
              <input
                type="text"
                placeholder="Title"
                className="shareinput"
                name="title"
                autoFocus={true}
              />
              <hr />
              <textarea
                placeholder="Describe service here"
                type="text"
                name="description"
                className="shareinput"
              ></textarea>
              <hr />
              <div className="upload">
                <input
                  className="labalimg"
                  type="file"
                  accept=".gif,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    uploadPictures(e);
                  }}
                  id="img"
                  style={{ display: "none" }}
                />
                <div className="sharebottom">
                  <div className="shareoptions">
                    <div className="shareoption">
                      <label htmlFor="img" className="shareoption">
                        <IoMdImage className="shareicon" />
                        Image
                      </label>

                      <button
                        className="cancelbtn"
                        onClick={() => setaddService(false)}
                      >
                        <AiOutlineClose />
                      </button>

                      <button type="submit" className="sendbtn">
                        <AiOutlineSend />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="imagesPost">
                {!(progress == 0) ? (
                  <div className="progress">
                    <p>the image will download {progress}%</p>
                  </div>
                ) : null}

                {images?.map((image) => (
                  <img src={image} width="200px" height="200px" />
                ))}
              </div>
            </form>
          </div>
        ) : (
          <div className="post">
            <div className="postwrapper">
              <div className="postleft">
                {post?.map((post, i) => (
                  <>
                    <div className="main">
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
                    

                      {state.signIn.userId === post.createby._id ||
                      state.signIn.role === "admin" ? (
                        <button
                          className="posttop"
                          onClick={() => {
                            deletePost(post._id);
                          }}
                          className="deletebtn1"
                        >
                          <BsFillTrashFill />
                        </button>
                      ) : (
                        <></>
                      )}

   {post?.image?.map((i) => (
                        <img
                          className="postimg"
                          src={i}
                          alt=""
                          width="450px"
                          height="300px"
                        />
                      ))}




                      <h4>by: {post?.createby?.username}</h4>
                      <h3>{post?.title}</h3>
                      <p>{post?.description}</p>

                   
                      <input
                      type="button"
                      className="showc"
                        onClick={(e) => {
                          console.log(showComment)
                          if (showComment  === "hide comments"){
                            setshowComment("show comments");
                            //e.target.value="show comments"


                          }
                          else
                          {
                            //e.target.value="hide comments"
                            setshowComment( "hide comments");
                          } 
                        }}
                      value={showComment}
                      />
           
           <span className="dateP">
                        {" "}
                        {post.createdAt.slice(0, 10)}
                      </span>
                      {showComment === "show comments" ? (
                        <></>
                      ) : (
                        <form
                          className="comments_form"
                          onSubmit={(e) => sendComment(e, post._id)}
                        >
                          <div className="commentTail">
                            <div className="numComment">
                              <h3 className="length">
                                {
                                  commments?.filter(
                                    (i) => i.onservicepost == post._id
                                  ).length
                                }
                                <FaComment />
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
                          {}
                          {commments
                            ?.filter((i) => i.onservicepost == post._id)
                            .map((comment, index) => {
                              return (
                                <div className="realComment" key={index}>
                                  <div className="realcommentData">
                                    <h5 className="commentauthr">
                                      {comment.createby.username}
                                    </h5>
                                    <p>{comment.text}</p>
                                    <p className="dateP">
                                      {comment.createdAt.slice(0, 10)}
                                    </p>

                                    {/*}   <button className="posttop"
                          onClick={() => {
                            deletecomment;
                          }}
                          className="deletebtn1"
                        >
                        
                          <BsFillTrashFill />
                        </button> */}
                                  </div>

                                  {state.signIn.userId ===
                                    comment.createby._id ||
                                  state.signIn.role === "admin" ? (
                                    <button
                                      className="posttop"
                                      onClick={() => {
                                        deletecomment(comment._id);
                                      }}
                                      className="deletecomment"
                                    >
                                      <AiFillDelete />
                                    </button>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              );
                            })
                            .reverse()}
                        </form>
                      )}
                    </div>
                   
                  </>
                ))}
                <br />
              </div>
            </div>
          </div>
        )}
        {/* <button className="seemore">show more</button> */}
       
      </div>
     
    </div>
  );
};

export default Services;
