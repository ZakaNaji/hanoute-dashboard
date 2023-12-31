import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="search">
        <input type="search" placeholder="Search..." />
        <SearchOutlinedIcon />
      </div>
      <div className="items">
        <div className="item">
          <DarkModeOutlinedIcon className="icon" />
        </div>
        <div className="item">
          <MenuOutlinedIcon className="icon" />
        </div>
      </div>
    </div>
  );
}
