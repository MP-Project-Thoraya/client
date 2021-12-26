import React from "react";
import './style.css';
import { storage } from "./../firebase";


const Onepageservice= ()=> {
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
    </div>)

    }
export default Onepageservice;
