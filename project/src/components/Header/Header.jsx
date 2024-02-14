import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Education",
      path: "/education",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      
      <nav className="flex">
      <div>
        <Link to={'/'}>
          <div className="font-mont">Riten<span>.</span>CV</div>
        </Link>
      </div>
        <div >
        <ul className="flex">
          {navItems.map((item) => (
            <div className="font-mont border-black" key={item.name} onClick={() => navigate(item.path)}>
               {item.name}
            </div>)
             )}
          </ul>
       
        </div>
         
      </nav>
    </div>
  );
};

export default Header;
