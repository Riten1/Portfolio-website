import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import SuperContainer from "./components/container/SuperContainer";
import MainContainer from "./components/container/MainContainer";
import image from './components/images/riten.jpg'
import icon1 from './components/images/icon_1.png.webp'

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
          <div className="w-96 h-full bg-indigo-950">
            <div className="block relative">
              <div className="w-full h-96">
              <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center">
            <img src={image}></img>
          </div>
              </div>
           
            </div>
            <div className="w-full h-full pl-4 pt-12 pr-4 pb-20 overflow-hidden">
              <div className="text-3xl font-semibold text-white leading-tight text-center">
                General Information
              </div>
              <ul className="mt-8">
                <li className="flex items-start justify-start">
                  <div className="w-5 h-5 mr-6">
                    <img src={icon1}></img>
                  </div>
                </li>
              </ul>
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
