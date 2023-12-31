import "./Root.scss";

import Sidebar from "../../componants/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../../componants/Navbar/Navbar";

export default function Root() {
  return (
    <div className="root">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
