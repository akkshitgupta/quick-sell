import DisplayIcon from "../../assets/Display.svg";
import useFetchApi from "../../config/useFetchApi.js";
import Dropdown from "../Dropdown/Dropdown.jsx";
import TasksLayout from "../TasksLayout/TasksLayout.jsx";
import "./board.css";

export default function Board() {
  const { data, loading } = useFetchApi();
  return (
    <div className="task-board">
      <div className="nav">
        <Dropdown>
          <img src={DisplayIcon} alt="Display Icon" />
          Display
        </Dropdown>
      </div>
      {loading ? (
        <div className="loader-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <TasksLayout data={data} />
      )}
    </div>
  );
}
