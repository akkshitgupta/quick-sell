function sortByPriority(group) {
  return group.sort((a, b) => b.priority - a.priority);
}

function sortById(group) {
  return group.sort((a, b) => a.id.localeCompare(b.id));
}

export default function sortBy(group, criteria) {
  switch (criteria) {
    case "priority":
      return sortByPriority(group);
    case "sort":
      return sortById(group);
    default:
      return group;
  }
}
