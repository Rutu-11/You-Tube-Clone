import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import "./_app.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HomeRoutes from "./Components/AllRoutes/AllRoutes";
import {useNavigate} from "react-router-dom";


export const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);
  console.log(process.env)
  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };

  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />

        <Container fluid className="app_main">
        
          {children}
        
        </Container>
      </div>
    </>
  );
};

const App = () => {

  // const {accessToken, loading } = useSelector((state)=>{return state.auth })

  // const navigate = useNavigate();
  // useEffect(()=>{
  //     if(!loading && !accessToken){
  //         navigate('/auth')
  //     }
  // },[accessToken, loading, navigate]);
  return (
   <>
   
     <HomeRoutes/>
    </>
  );
};

export default App;
