import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import "./_app.scss";
import { useState } from "react";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

import { Routes, Route, Switch } from "react-router-dom";
import HomeRoutes from "./Components/AllRoutes/AllRoutes";

export const Layout = ({children}) => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };

  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className="app_container border border-info">
        <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />

        <Container fluid className="app_main border">
          {/* <HomeScreen /> */}
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
   <>
   
     <HomeRoutes/>
   </>
  );
};

export default App;
