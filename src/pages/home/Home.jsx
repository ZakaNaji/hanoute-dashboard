import Widget from "../../componants/Widget/Widget";
import widgetsDataTypeArray from "../../componants/Widget/widgetsDataTypeArray";
import "./Home.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
export default function Home() {
  return (
    <div className="home">
      <div className="widgets">
        <Widget
          type={widgetsDataTypeArray.USER}
          icon={
            <PersonOutlineOutlinedIcon
              className="icon"
              style={{ backgroundColor: "rgba(128, 0, 128, 0.541)" }}
            />
          }
        />
      </div>
    </div>
  );
}
