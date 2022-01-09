import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import signIn from "../../reducers/login";
import { useSelector } from "react-redux";

const AllServices = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // const [url, setUrl] = useState("");
  // const [image, setImage] = useState(null);
  const [post, setPost] = useState([]);

  // const state = useSelector((state) => {
  //   return state;
  // });

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

  ///////////////delet
  const DeletePost = (id) => {
    try {
      axios.delete(`${BASE_URL}/delete/${id}`).then(() => {
        getPosts();
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // const handleChange = (e) => {
  //   console.log(e);
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };
  // const handleUpload = () => {
  //   console.log(image);
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",

  //     (snapshot) => {},
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           setUrl(url);
  //         });
  //     }
  //   );
  // };
  //console.log("image:",image)
  return (
    <div className="post">
      {post?.map((post, i) => (
        <>
          <h1>Post {i + 1}: {post?.title}</h1>
          <h4>Author: {post?.createby?.username}</h4>
          <p>{post?.description}</p>
        </>
      ))}

      {/* <input type="file" onChange={handleChange} />
    <button onClick={handleUpload}>Upload</button>
  
    <br/>
    <img src={url} />
    {url} */}
    </div>
  );
};

export default AllServices;
