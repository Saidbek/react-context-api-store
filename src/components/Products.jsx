import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Products = () => {
  const { getProducts, addToCart } = useContext(GlobalContext);

  const products = getProducts();

  return (
    <>
      <h3>Products</h3>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.inventory}</td>
              <td>
                <button
                  disabled={product.inventory > 0 ? "" : "disabled"}
                  onClick={() => addToCart(product.id)}
                >
                  {product.inventory > 0 ? "Add to cart" : "Sold out"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
