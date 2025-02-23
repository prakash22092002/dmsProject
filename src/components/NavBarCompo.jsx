import React from "react";
import { Link } from "react-router-dom";

const NavBarCompo = () => {
  const navItems = [
    {
      toPath: "/",
      linkName: "HOME",
    },
    {
      toPath: "/department",
      linkName: "DEPARTMENT",
    },
    {
      toPath: "/employees",
      linkName: "EMPLOYEES",
    },
  ];
  return (
    <nav className="bg-[#3a9c88] p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl text-white font-semibold">DMS-SYS</div>
        <div className="flex gap-10">
          {navItems.map((el, i) => {
            return (
              <Link
                key={`nav-${i}`}
                to={el.toPath}
                className="text-white text-lg px-4 py-2 rounded-md hover:bg-[#2d7f67] transition duration-300 text-red-500"
              >
                {el.linkName}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBarCompo;
