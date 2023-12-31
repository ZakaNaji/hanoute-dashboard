import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Hanoute</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <Link to="/user">
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <PointOfSaleIcon className="icon" />
            <span>Debt</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}
