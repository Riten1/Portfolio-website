import React from "react";
import { useNavigate } from "react-router-dom";

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
        <ul className="flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <button onClick={() => navigate(item.path)}>{item.name}</button>
            </li>)
             )}
          </ul>
       
        </div>
         
      </nav>
    </div>
  );
};

export default Header;
