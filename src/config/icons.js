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

export function priorityIcon(priority) {
  switch (priority) {
    case "Low":
      return PriorityLow;
    case "Medium":
      return PriorityMedium;
    case "High":
      return PriorityHigh;
    case "Urgent":
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
