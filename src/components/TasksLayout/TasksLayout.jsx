import { useEffect, useState } from "react";
import { Card, GroupHeader } from "..";
import groupBy from "../../config/groupBy";
import { priorityIcon, statusIcon } from "../../config/icons";
import sortBy from "../../config/sortBy";
import { useDisplay } from "../../contexts/DisplayContext";
import "./TasksLayout.css";

/**
 * TasksLayout is a component that renders a Kanban board with cards grouped by status or priority.
 *
 * The component expects a `display` object with a `group` property that specifies how the cards should be grouped.
 * The component will render a Kanban board with columns for each group specified in the `display.group` property.
 *
 * The component expects a `data` object with a `tickets` property that is an array of objects, each representing a card.
 * The component will render a card for each item in the `data.tickets` array.
 *
 * The component will also render a loading screen if the `group` property is not set.
 *
 * @param {{ display: { group: "status" | "priority" | "user" } }} props
 * @returns {JSX.Element}
 */
export default function TasksLayout({ data }) {
  const { display } = useDisplay();
  const [group, setGroup] = useState(null);
  useEffect(() => {
    setGroup(groupBy(data, display.group));
  }, [data, display]);

  const headerIcons = (category) => {
    switch (display.group) {
      case "status":
        return statusIcon(category);
      case "priority":
        return priorityIcon(category);
    }
  };

  return (
    group && (
      <div className="tasks-layout">
        {Object.keys(group).map((category, ind) => (
          <div key={ind}>
            <GroupHeader
              title={category}
              icon={headerIcons(category)}
              length={group[category]?.length}
            />
            {sortBy(group[category], display.order).map((ticket, cardInd) => (
              <Card task={ticket} key={cardInd} />
            ))}
          </div>
        ))}
      </div>
    )
  );
}
