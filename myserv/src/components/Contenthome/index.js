import React from "react";
import './style.css'
import { Link } from "react-router-dom";


const Content=()=> {
  return (
  
     <div className="cate">
       <div className="desc">
      <Link to="/myservice">

<img className="contentimg" src="https://th.bing.com/th/id/OIP.s68AtajYJV1Eiz9FFXKjWgHaEc?pid=ImgDet&rs=1"  alt="no img" />

</Link>  
<p> Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.</p>


</div>
</div>

  );                            
}

export default Content ;