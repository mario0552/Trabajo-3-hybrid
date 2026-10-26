import useLocalStorage from "../hooks/useLocalStorage";
import { CartContext } from "./CartContext";
import { ProductsContext } from "./ProductsContext.js";
import { useContext } from "react";
import { getUser } from "../utils/auth";

function CartProvider({ children }) {
  const { products } = useContext(ProductsContext);
  const [cart, setCart] = useLocalStorage("hp_cart", []);

  const getAvailableStock = (productOrId) => {
    const productId =
      typeof productOrId === "object" ? productOrId.id : productOrId;
    const product = products.find((item) => item.id === productId);

    if (!product) return 0;

    const quantityInCart =
      cart.find((item) => item.id === productId)?.quantity ?? 0;
    return Math.max(0, Number(product.stock ?? 0) - quantityInCart);
  };

  const addToCart = (product) => {
    if (!getUser() || getAvailableStock(product) < 1) return false;

    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
    return true;
  };

  const updateQuantity = (productId, quantity) => {
    if (!getUser()) return;

    const nextQuantity = Math.floor(Number(quantity));

    if (!Number.isFinite(nextQuantity)) return;

    const product = products.find((item) => item.id === productId);
    if (nextQuantity > 0 && (!product || nextQuantity > Number(product.stock))) {
      return;
    }

    setCart((currentCart) =>
      nextQuantity <= 0
        ? currentCart.filter((item) => item.id !== productId)
        : currentCart.map((item) =>
            item.id === productId ? { ...item, quantity: nextQuantity } : item,
          ),
    );
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId),
    );
  };

  const clearCart = () => setCart([]);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce(
    (sum, item) => sum + Number(item.precio) * item.quantity,
    0,
  );

  return (
    <CartContext
      value={{
        cart,
        itemCount,
        total,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getAvailableStock,
      }}
    >
      {children}
    </CartContext>
  );
}

export default CartProvider;
