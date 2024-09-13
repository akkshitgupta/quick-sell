import { Add, Menu } from "../../assets";
import "./GroupHeader.css";

export default function GroupHeader({ icon, title, length }) {
  return (
    <div className="groupheader">
      <div className="title">
        <img src={icon} alt="icon" />
        <span>{title}</span>
        <span>{length}</span>
      </div>
      <span className="title">
        <img src={Add} alt="Add" />
        <img src={Menu} alt="Menu" />
      </span>
    </div>
  );
}
