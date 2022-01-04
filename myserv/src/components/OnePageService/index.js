import React, { useState } from "react";
import './style.css';
import { storage } from "./../firebase"

const Onepageservice= ()=> {

  const [ url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [post,setPost] = useState(null);

  const handleChange = (e) => {
    console.log(e);
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload  = () => {
    console.log(image);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    ); 

    }
//console.log("image:",image)


  return (
      <div className='post'>
         <img className='postimgage'
 src="https://www.stancoe.org/sites/default/files/styles/banner/public/banners/Administration.jpg?itok=jXKB2uR2"
    height="170px"  alt="no img" />
    <form className='writepost'>
    <div className='postgroup'>
    <label>
    </label>
    <input type='file' className='fileinput' style={{display:'none'}}/>
    <input type='text' placeholder='title' className='textarea1' autoFocus={true}/>
    <div className='postgroup'>
    <textarea placeholder= 'write here' type='text' className='textarea'>
    </textarea>
    <br></br>
    <button className='button'>send </button>
    </div>
    </div>
    </form>
    <input type="file" onChange={handleChange} />
    <button onClick={handleUpload}>Upload</button>
    <br/>
    <img src={url} />
    {url}

    </div> )
    

        }
export default Onepageservice;
