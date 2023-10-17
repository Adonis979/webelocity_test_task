import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../../features/product/productSlice";
import ProductCart from "./ProductCart";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  return (
    <div>
      {status === "pending" && <p>Loading...</p>}
      {status === "success" && (
        <Box display="flex" gap="20px" p="20px" flexWrap="wrap">
          {products.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </Box>
      )}
      {status === "rejected" && <p>Error</p>}
    </div>
  );
}

export default ProductList;
