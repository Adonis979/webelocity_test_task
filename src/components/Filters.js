import React from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  filterByCategory,
  sortByPrice,
} from "../features/product/productSlice";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <Box display="flex" gap="20px" width="50%" mt="20px">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Filter by category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter by category"
          onChange={(event) => dispatch(filterByCategory(event.target.value))}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Phone"}>Phone</MenuItem>
          <MenuItem value={"Laptop"}>Laptop</MenuItem>
          <MenuItem value={"Computer"}>Computer</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort by price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Sort by price"
          onChange={(event) => dispatch(sortByPrice(event.target.value))}
        >
          <MenuItem value={"low-high"}>Low to High</MenuItem>
          <MenuItem value={"high-low"}>High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
