import React from "react";
import ProductList from "../components/products/ProductList";
import { Box } from "@mui/material";
import Filters from "../components/Filters";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" gap="20px" alignItems="center">
      <Filters />
      <ProductList />
    </Box>
  );
};

export default Home;
