import { GlobalProvider } from "./context/GlobalContext";
import Products from "./components/Products";
import Cart from "./components/Cart";

export default function App() {
  return (
    <GlobalProvider>
      <h3>Shopping Cart Example using Context API</h3>

      <hr />
      <Products />

      <hr />
      <Cart />
    </GlobalProvider>
  );
}
