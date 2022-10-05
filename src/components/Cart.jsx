import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Cart = () => {
  const { getCartProducts } = useContext(GlobalContext);

  const products = getCartProducts();
  const hasProducts = products.length > 0;

  return (
    <>
      <h3>Your Cart</h3>

      {hasProducts ? (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              {product.title} - ${product.price}
              {product.quantity ? ` x ${product.quantity}` : null}
            </div>
          ))}
        </div>
      ) : (
        <em>Please add some products to cart.</em>
      )}
    </>
  );
};

export default Cart;
