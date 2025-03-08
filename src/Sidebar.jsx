import { useState } from "react";

import "./Theme";
import Theme from "./Theme";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={` ${
        isOpen ? " w-72" : "w-24"
      }  left-0 top-0 h-full dark:text-white bg-gray-200  dark:bg-gray-800 transition-transform transform duration-300 max-w-72 `}
    >
      <div className="relative ">
        <h1
          className={` ${
            isOpen ? " text-4xl" : " text-xl"
          } uppercase text-center py-6`}
        >
          Logo
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={` ${
            isOpen ? "" : "-rotate-180"
          } absolute -right-4 top-12 text-2xl transition-all duration-500`}
        >
          ➡️
        </button>
      </div>
      <div>
        <Theme />
      </div>
    </div>
  );
};

export default Sidebar;
