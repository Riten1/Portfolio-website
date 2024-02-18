import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import SuperContainer from "./components/container/SuperContainer";
import MainContainer from "./components/container/MainContainer";
import image from './components/images/riten.jpg'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <SuperContainer>
      <Header />
      <main>
        <MainContainer>
          <div className="w-96 h-full">
            <div className="block relative">
              <div className="w-full h-96">
              <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center">
            <img src={image}></img>
          </div>
              </div>
           
            </div>
        
          </div>
          
        <Outlet />
        </MainContainer>
      </main>
      <Footer />
    </SuperContainer>
  );
}

export default App;
