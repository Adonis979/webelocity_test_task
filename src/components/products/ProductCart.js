import { Box, Typography, Button, Collapse, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  }, [open]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      bgcolor="bisque"
      gap="20px"
      padding="20px"
      width="200px"
    >
      <Typography variant="caption">{product.category}</Typography>
      <Typography variant="h6" fontWeight={600} textAlign="center">
        {product.name}
      </Typography>
      <Typography>{product.brand}</Typography>
      <Typography fontWeight={600}>{product.price} EUR</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(addToCart(product));
          setOpen(true);
        }}
      >
        Add to cart
      </Button>
      <Collapse in={open}>
        <Alert sx={{ mb: 2 }}>Added to Cart!</Alert>
      </Collapse>
    </Box>
  );
};

export default ProductCart;
