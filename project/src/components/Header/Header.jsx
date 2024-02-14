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
      name: "Testimonals",
      path: "/testimonals",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      <nav>
        {navItems.map((item) => {
          <ul>
            <li key={item.name}>
              <button onClick={() => navigate(item.path)}>{item.name}</button>
            </li>
          </ul>;
        })}
      </nav>
    </div>
  );
};

export default Header;
