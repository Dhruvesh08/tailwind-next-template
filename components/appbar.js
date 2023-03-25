import React from "react";

const name_surname = {
  name: "John",
  surname: "Doe",
};

const navpath = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Service",
    path: "/service",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const AppBar = () => {
  return (
    <div className="flex justify-between w-full h-16">
      <div className="bg-blue-500 w-1/2 flex items-center">Industries</div>
      <div className="bg-blue-300 w-1/2 flex items-center">
        <ul className="flex justify-around w-full">
          {navpath.map((item) => {
            return <li className="bg-white">{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
