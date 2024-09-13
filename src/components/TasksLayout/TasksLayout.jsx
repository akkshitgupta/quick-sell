import { Card, GroupHeader } from "..";
import { priorityLabel, statusIcon } from "../../config/icons";
import groupBy from "../../config/groupBy";
import useFetchApi from "../../config/useFetchApi";
import "./TasksLayout.css";
import { useEffect, useState } from "react";
import { useDisplay } from "../../contexts/DisplayContext";

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
        return priorityLabel(category);
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
