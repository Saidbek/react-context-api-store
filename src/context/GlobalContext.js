import { createContext, useEffect, useState } from "react";

import products_data from "../data/products.json";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [productsById, setProductsById] = useState({});
  const [productIds, setProductIds] = useState([]);
  const [addedIds, setAddedIds] = useState([]);
  const [quantityById, setQuantityById] = useState({});

  useEffect(() => {
    setProductsById(
      products_data.reduce((obj, product) => {
        obj[product.id] = product;
        return obj;
      }, {})
    );

    setProductIds(products_data.map((product) => product.id));
  }, []);

  const getProducts = () => {
    return productIds.map((productId) => productsById[productId]);
  };

  const getCartProducts = () => {
    return addedIds.map((productId) => ({
      ...productsById[productId],
      quantity: quantityById[productId] || 0
    }));
  };

  const addToCart = (productId) => {
    setProductsById((prevState) => {
      const updatedProduct = {
        ...productsById[productId],
        inventory: productsById[productId].inventory - 1
      };

      return {
        ...prevState,
        [productId]: updatedProduct
      };
    });

    setAddedIds((prevState) => {
      if (addedIds.indexOf(productId) !== -1) return prevState;
      return [...prevState, productId];
    });

    setQuantityById((prevState) => {
      return {
        ...prevState,
        [productId]: (prevState[productId] || 0) + 1
      };
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        getProducts,
        getCartProducts,
        addedIds,
        addToCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
