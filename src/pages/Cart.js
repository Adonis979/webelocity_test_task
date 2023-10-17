import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartProduct from "../components/cart/CartProduct";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const orderTotal = useSelector((state) => state.cart.orderTotal);
  return (
    <Box>
      {cartProducts.length < 1 && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <p>There's no product on the cart</p>
        </Box>
      )}
      {cartProducts && (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            py: "40px",
          }}
        >
          {cartProducts.map((product, index) => (
            <CartProduct key={index} product={product} />
          ))}
          <hr
            style={{
              border: "none",
              borderTop: "2px solid #000",
              maring: "20px 0px",
              width: "100%",
            }}
          />
          <Typography textAlign={"end"} variant="h5" fontWeight={600}>
            Order Total: {orderTotal.toFixed(2)} EUR
          </Typography>
        </Container>
      )}
    </Box>
  );
};

export default Cart;
