import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
export default function Widget({ type, icon }) {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{type.title}</span>
        <span className="counter">
          {type.isAmountMoney ? "$" : ""} {type.amount}
        </span>
        <span className="link">{type.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          20 %
        </div>
        {icon}
      </div>
    </div>
  );
}
