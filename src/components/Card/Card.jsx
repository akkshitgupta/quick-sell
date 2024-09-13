import { priorityLabel, statusIcon } from "../../config/icons";
import { useDisplay } from "../../contexts/DisplayContext";
import "./Card.css";

export default function Card({ task }) {
  const { display } = useDisplay();

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-id">{task.id}</p>
        {display.group !== "users" && (
          <img src="user_image.jpg" alt={task.userId} />
        )}
      </div>
      <div className="card-content">
        <div className="card-title">
          {display.group !== "status" && (
            <img src={statusIcon(task.status)} alt="Status" />
          )}
          <span>{task.title}</span>
        </div>
        <div className="card-tags">
          {display.group !== "priority" && (
            <img
              className="tag"
              src={priorityLabel(task.priority)}
              alt="Priority"
            />
          )}
          {task.tag.map((tag, ind) => (
            <span key={ind} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
