import React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { BsCartDash } from "react-icons/bs";
import { useSelector } from "react-redux";

const NavBar = () => {
  const orderQuantity = useSelector((state) => state.cart.orderQuantity);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="aliceblue"
      px="50px"
      py="30px"
      position="sticky"
      top={0}
      zIndex={9999}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    >
      <Link to="/">Home</Link>
      <Badge badgeContent={orderQuantity} color="primary">
        <Link to="/cart">
          <BsCartDash size={"30px"} />
        </Link>
      </Badge>
    </Box>
  );
};

export default NavBar;
