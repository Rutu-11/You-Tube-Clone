
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {Container} from "react-bootstrap"
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import "./_app.scss"
function App() {
  return (
    <>
    <Header/>
    <div className='app_container border border-info' >
      <Sidebar/>

      <Container fluid className="app_main border border-warning">
          <HomeScreen />
      </Container>
    </div>
    </>
  );
}

export default App;
