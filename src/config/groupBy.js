export function groupByStatus(tickets) {
  const group = {
    Backlog: [],
    Todo: [],
    "In progress": [],
    Done: [],
    Cancelled: [],
  };

  tickets.forEach((ticket) => {
    const property = ticket["status"];
    group[property].push(ticket);
  });

  return group;
}

export const priorityLabel = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

/**
 * Groups tickets by their priority.
 * @param {Object[]} tickets An array of ticket objects.
 * @returns {Object} An object with the following properties: "No Priority", Urgent, High, Medium, Low.
 * Each property is an array of ticket objects with the corresponding priority.
 */

export function groupByPriority(tickets) {
  const group = {
    "No Priority": [],
    Urgent: [],
    High: [],
    Medium: [],
    Low: [],
  };

  tickets.forEach((ticket) => {
    const property = priorityLabel[ticket.priority];
    group[property].push(ticket);
  });

  return group;
}

export function groupByUsers(users, tickets) {
  const group = {};

  users.forEach((user) => {
    group[user.name] = [];

    tickets.forEach((ticket) => {
      if (ticket.userId === user.id) {
        group[user.name].push(ticket);
      }
    });
  });

  return group;
}

export default function groupBy(data, criteria) {
  switch (criteria) {
    case "status":
      return groupByStatus(data.tickets);
    case "priority":
      return groupByPriority(data.tickets);
    case "users":
      return groupByUsers(data.users, data.tickets);
    default:
      return data.tickets;
  }
}
