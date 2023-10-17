import { Box, Typography, Button } from "@mui/material";
import React from "react";
import {
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      border="1px solid grey"
      padding="20px"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="antiquewhite"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h6" fontWeight={600}>
          {product.name}
        </Typography>
        <Typography variant="caption">{product.category}</Typography>
        <Typography color="grey" variant="caption">
          Made by:{product.brand}
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{ fontWeight: "600" }}
          color="success"
          onClick={() => dispatch(increaseQuantity(product))}
        >
          +
        </Button>
        {product.quantity}
        <Button
          sx={{ fontWeight: "600" }}
          color="error"
          onClick={() => dispatch(decreaseQuantity(product))}
        >
          -
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        <Typography variant="subtitle1" fontWeight={600}>
          {product.price} EUR
        </Typography>
        <Typography
          color="blue"
          sx={{ cursor: "pointer" }}
          textAlign="end"
          variant="caption"
          onClick={() => dispatch(deleteFromCart(product))}
        >
          Remove
        </Typography>
      </Box>
    </Box>
  );
};

export default CartProduct;
