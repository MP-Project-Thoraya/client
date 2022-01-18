import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillTrashFill} from "react-icons/bs";
import {AiTwotoneEdit,AiOutlineClose,AiOutlineSend ,AiOutlineMore} from "react-icons/ai";
import swal from 'sweetalert'
import {BiImageAdd} from "react-icons/bs";
import AllServices from "../AllServices";
import Onepageservice from "../AllServices";
import "./style.css";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import {IoMdImage, IoMdCreate } from "react-icons/io";

const Services = () => {
  let navigate = useNavigate();
  const [addService, setaddService] = useState(false);

  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  const [post, setPost] = useState([]);

  const [commments, setcommments] = useState([]);

  const newPost = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      `http://localhost:5000/create_post`,
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
    swal("Posted successfully",  "success");
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
      axios.get(`http://localhost:5000/getall`).then((result) => {
        console.log(result.data);
        setPost(result.data.result);
      });
    } catch (error) {
      console.log(error);
    }
  };




  const updatpost = async (id) => {
    console.log('iiii', id);

    const result = await axios.put(
      `http://localhost:5000/update/${id}`,
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
      const resp = await axios.get(`http://localhost:5000/getallcomment`);
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
        const resp = await axios.post(
          `http://localhost:5000/createcomment`,
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

  const deletePost = async (id) => {
    await axios.delete(
      `http://localhost:5000/deleteposts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );


    swal({
     
      text: "Are you sure to delete the posts ?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    })
    .then((willDelete) => {
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
      <h3>Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.</h3>

      <button className="buttonhome" onClick={() => setaddService(true)}>Add service</button>
</div>
      {addService ? (
        <div className="share">
     
          <form onSubmit={newPost} className="writepost">
            
              <input
                type="text"
                placeholder="title"
                className="shareinput"
                name="title"
                autoFocus={true}
              />
              <hr />
              <textarea
                placeholder="write here"
                type="text"
                name="description"
                className="shareinput"
              ></textarea>
<hr />
              <div className="upload">
                <input className="labalimg"
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
                <label htmlFor="img" className="shareoption"><IoMdImage className="shareicon"/>Image</label>
              
              
          <button onClick={() => setaddService(false)}><AiOutlineClose/></button>


              <button type="submit" className="button">
               <AiOutlineSend/>
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

                {images?.map((image)  => (
                  <img src={image} width="400px" height="270px" />
                ))}
              </div>
           
          </form>
          

         
          </div>
        
        
       
      ) : (
        < div className="post"  >
          <div className="postwrapper">
          <div className="posttop">

            
          <div className="postleft">
            {post?.map((post, i) => (
              <>
               <div className="main">
                <h3>
                  {post?.title}
                  
                </h3>
                <span className="postdate" >5 mins age</span>

                <div className="postright">
                      <AiOutlineMore/>

                </div>
                < button onClick={() => {  deletePost(post._id);
                  }}
                  className="deleteBtn"
                >  <BsFillTrashFill/>
                 
                </button>



                <button onClick={() => {  updatpost (post._id);
                  }}
                  className="editBtn"
                > 
                 <AiTwotoneEdit/>
                 
                </button>
                </div>
             

                <h4>Author: {post?.createby?.username}</h4>
                <p>{post?.description}</p>
                {post?.image?.map((i) => (
                  <img src={i} alt="" width="350px"  height="px"/>
                ))}


                <form
                  className="comments_form"
                  onSubmit={(e) => sendComment(e, post._id)}
                >
                  <div className="commentHead">
                    <h3>New Comment</h3>
                    <button type="submit"><AiOutlineSend/></button>
                  </div>
                  <div className="commentTail">
                    <textarea
                      name="comment"
                      placeholder="wirite here comments"
                      required
                      cols="50"
                      rows=""
                    ></textarea>
                  </div>
                  <div className="numComment">
                    <h3>
                      {
                        commments?.filter((i) => i.onservicepost == post._id)
                          .length
                      }{" "}
                      Comments
                    </h3>
                  </div>
                  {console.log("my comments", commments)}
                  {commments
                    ?.filter((i) => i.onservicepost == post._id)
                    .map((comment, index) => {
                      return (
                        <div className="realComment" key={index}>
                          <hr />
                          <div className="realcommentRow">
                            <div className="realcommentData">
                              <h3>{comment.createby.username}</h3>
                              <p>{comment.text}</p>
                              <p className="dateP">
                                {comment.createdAt.slice(0, 10)}
                                {comment.createdAt.slice(11, 16)}
                              </p>
                            </div>



                          </div>
                        </div>
                      );
                    })
                    .reverse()}
                  <hr />
                </form>
              </>
            ))}
            <br />
            </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Services;
