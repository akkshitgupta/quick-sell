import { Card, GroupHeader } from "..";
import { priorityIcon, statusIcon } from "../../config/icons";
import useFetchApi from "../../config/useFetchApi";
import { useDisplay } from "../../contexts/DisplayContext";
import "./TasksLayout.css";

export default function TasksLayout() {
  const { display } = useDisplay();
  const { data, group } = useFetchApi();
  console.log(data);
  console.log({ group });

  const headerIcons = (category) => {
    switch (display.group) {
      case "status":
        return statusIcon(category);
      case "priority":
        return priorityIcon(category);
    }
  };

  return !group ? (
    <div className="loader-screen">
      <span className="loader"></span>
    </div>
  ) : (
    <div className="tasks-layout">
      {Object.keys(group).map((category, ind) => (
        <div key={ind}>
          <GroupHeader
            title={category}
            icon={headerIcons(category)}
            length={group[category]?.length}
          />
          {group[category].map((ticket, cardInd) => (
            <Card task={ticket} key={cardInd} />
          ))}
        </div>
      ))}
    </div>
  );
}
