import { Container, Select } from "./styles.ts";
import React from "react";

interface FilterTabsProps {
  onValueChange: (status: string) => void;
}

export default function FilterTabs({ onValueChange }: FilterTabsProps) {
  const [filterValue, setFilterValue] = React.useState("All");

  return (
    <Container>
      <label>
        <span>Filter: </span>
        <Select
          value={filterValue}
          onChange={(e) => {
            setFilterValue(e.target.value);
            onValueChange(e.target.value);
          }}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Select>
      </label>
    </Container>
  );
}
