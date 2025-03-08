import {} from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Entry = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Entry;
