
import './style.css'
import Header from "./../Header"
import Content from "../Contenthome";
import Sidebar from "../Sidebar";
import {useSelector} from 'react-redux'
const Home =()=> {
  const state=useSelector((state)=>{
    console.log("state",state);
    return state;
});
  return (
    <>

<Header />
<Content/>
{ <Sidebar/> }


    <div className="home"> 

 


   

    </div> 

     

    </>
  );
  
}

export default Home;