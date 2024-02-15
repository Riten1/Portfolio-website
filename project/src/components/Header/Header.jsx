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
    <div className="">
      
      <nav className="">
      
        <div className="flex bg-indigo-950 text-white justify-center items-center">
        <Link to={'/'}>
          <div className=" font-mont">Riten<span>.</span>CV</div>
        </Link>
        <ul className="flex">
          {navItems.map((item) => (
            <div className="flex font-mont border-black items-center" key={item.name} onClick={() => navigate(item.path)}>
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
