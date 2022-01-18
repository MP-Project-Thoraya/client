import React from "react";
import './style.css'
import { Link } from "react-router-dom";


const Content=()=> {
  return (
  
     <div className="cate">

       
     <div className="cont">
       <div className="card">
       <h1 className="title">
         <span className="brand">my services</span>
         </h1>
       
<p className="desc"> Save your time and effort in my service. It provides you with news about home services. Here you can discover services and provide services.</p>
<Link to="/myservice">
<button className="buttonhome">discover latest services</button>
</Link>
</div>

<div className="card">
<img src="https://th.bing.com/th/id/OIP.a3SC3cCb4uOKwLyalnNJTwHaFj?pid=ImgDet&rs=1" height="100%" width="100%" alt="no img" />
</div>



</div>

</div>
  );                            
}

export default Content ;