// import { useState } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  let location = pathname.split("/")?.[1];

  function link(type = null) {
    if (location === "") {
      location = "about";
    }
    let classes =
      "no-underline flex text-white  pl-6 pr-6 pt-5 pb-5 font-mont cursor-pointer border-y-0 border-x-2 border-l-0 border-white border-solid hover:bg-indigo-400 duration-200";
    if (location === type) {
      classes += " bg-indigo-400";
    } else {
      classes += " bg-indigo-950";
    }
    return classes;
  }

  const navItems = [
    {
      name: "About",
      path: "/",
      link: "about",
    },
    {
      name: "Skills",
      path: "/skills",
      link: "skills",
    },
    {
      name: "Services",
      path: "/services",
      link: "services",
    },
    {
      name: "Experience",
      path: "/experience",
      link: "experience",
    },
    {
      name: "Education",
      path: "/education",
      link: "education",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      link: "portfolio",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
      link: "testimonials",
    },
    {
      name: "Contact",
      path: "/contact",
      link: "contact",
    },
  ];

  return (
    <div className="">
      <nav className="">
        <div className="flex justify-start items-center pt-9">
          <Link to={"/"} className="no-underline">
            <div className="font-mont text-4xl text-indigo-950 font-extrabold no-underline pl-10 mr-12">
              Riten
              <span className="font-mont text-3xl font-extrabold text-indigo-400">
                .
              </span>
              CV
            </div>
          </Link>
          <ul className="flex">
            {navItems.map((item) => (
              <Link to={item.path} className={link(item.link)} key={item.name}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
