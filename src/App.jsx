import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import "./_app.scss";
import { useEffect, useState } from "react";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

// import { Routes, Route, Switch, useNavigate } from "react-router-dom";
import HomeRoutes from "./Components/AllRoutes/AllRoutes";
import { useSelector } from "react-redux";
import WatchScreen from "./Screens/WatchScreen/WatchScreen";


import {Routes, Route,useNavigate} from "react-router-dom";
// import { Layout } from '../../App';
// import HomeScreen from '../../Screens/HomeScreen/HomeScreen';
// import LoginScreen from '../../Screens/LoginScreen/LoginScreen';

// import WatchScreen from './Screens/WatchScreen/WatchScreen';

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
          {/* <HomeScreen /> */}
          {children}
          {/* <WatchScreen/> */}
        </Container>
      </div>
    </>
  );
};

const App = () => {

  const {accessToken, loading } = useSelector((state)=>{return state.auth })

  const navigate = useNavigate();
  useEffect(()=>{
      if(!loading && !accessToken){
          navigate('/auth')
      }
  },[accessToken, loading, navigate]);
  return (
   <>
    {/* <Routes>
    <Route path="/" element={<HomeScreen/>} />
    <Route path="/watch/:id" element={<WatchScreen/> }  />
   </Routes>  */}
   
     <HomeRoutes/>
    </>
  );
};

export default App;
