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

const priorityLabel = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

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
  console.log(`inside the users function`);

  const group = {};

  users.forEach((user) => {
    group[user.name] = [];

    tickets.forEach((ticket) => {
      if (ticket.userId === user.id) {
        group[user.name].push(ticket);
      }
    });
  });

  console.log({ group });

  return group;
}

export default function groupBy(data, criteria) {
  // console.log(tickets, { criteria });

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
