
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
    <div className="home"> 
    <Content/>
     { <Sidebar/> }

    </div> 
    </>
  );
  
}

export default Home;