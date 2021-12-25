
import './style.css'
import Header from "./../Header"
import Content from "../Contenthome";
import Sidebar from "../Sidebar";

const Home =()=> {
  return (
    <>

<Header />
    <div className="home"> 
    <Content/>
     <Sidebar/>

    </div> 
    </>
  );
  
}

export default Home;