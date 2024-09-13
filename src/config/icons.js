import {
  Backlog,
  Cancelled,
  Done,
  InProgress,
  NoPriority,
  PriorityHigh,
  PriorityLow,
  PriorityMedium,
  PriorityUrgentColour,
  Todo,
} from "../assets";

export function priorityLabel(priority) {
  switch (priority) {
    case 1:
      return PriorityLow;
    case 2:
      return PriorityMedium;
    case 3:
      return PriorityHigh;
    case 4:
      return PriorityUrgentColour;
    default:
      return NoPriority;
  }
}

export function statusIcon(status) {
  switch (status) {
    case "Todo":
      return Todo;
    case "Backlog":
      return Backlog;
    case "In progress":
      return InProgress;
    case "Done":
      return Done;
    case "Cancelled":
      return Cancelled;
    default:
      return NoPriority;
  }
}
