import React from "react";

import {useSelector} from 'react-redux'

const Userprofile=()=> {
    const state=useSelector((state)=>{
        return state;
    });
  return (
    <div className="home">
      

<h1>user profile</h1>

    </div>
  );
}

export default Userprofile;