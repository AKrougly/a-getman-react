import React from "react";

import { List } from "@material-ui/core";

import { VisibilityFilters } from '../../../stores/consts';
import RequestItem from "./RequestItem";

export default function ToDoList({
  visibilityFilter = VisibilityFilters.SHOW_ALL,
  filter = false,
  filterValue = "",
  showDeleted = false,
  items = [],
  onChange = () => {},
  onSend = () => {}
}) {
  // Handle item changed property
  const handleChange = item => {
    onChange(item);
  };

  // Play item
  const handleSend = item => {
    onSend(item, items);
  };

  // Apply filter on active items if filter option is active
  const lowerCaseFilter = filterValue.toLowerCase();
  const filterItems = items.filter(
    ({ url, completed, deleted }) => (
      ((visibilityFilter === VisibilityFilters.SHOW_ALL) ||
      ((visibilityFilter === VisibilityFilters.SHOW_ACTIVE) && (!completed)) ||
      ((visibilityFilter === VisibilityFilters.SHOW_COMPLETED) && (completed)))
      && (!filter || !filterValue || url.includes(lowerCaseFilter))
      && (showDeleted || !deleted)
    )
  );

  return (
    <List>
      {filterItems
        .filter(({ completed }) => !completed)
        .map((item) => (
          <RequestItem
            key={item.uid}
            item={item}
            onChange={handleChange}
            onSend={handleSend}
          />
        ))}
      {filterItems
        .filter(({ completed }) => completed)
        .map((item) => (
          <RequestItem
            key={item.uid}
            item={item}
            onChange={handleChange}
            onSend={handleSend}
          />
        ))}
    </List>
  );
}
