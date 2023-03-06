
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {Container} from "react-bootstrap"
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import "./_app.scss"
import { useState } from 'react';
function App() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = ()=>{
    return setSidebar(!sidebar);
  }
  return (
    <>
    <Header handleSidebar={handleSidebar} />
    <div className='app_container border border-info' >
      <Sidebar sidebar={sidebar}/>

      <Container fluid className="app_main border border-warning">
          <HomeScreen />
      </Container>
    </div>
    </>
  );
}

export default App;
