import { CartContext } from "./CartContext";
import { ProductsContext } from "./ProductsContext.js";
import { useContext, useEffect, useState } from "react";
import { AUTH_CHANGE_EVENT, getUser } from "../utils/auth";

function getCartStorageKey(userId) {
  return `hp_cart_${encodeURIComponent(userId)}`;
}

function loadCart(userId) {
  if (!userId) return [];

  try {
    const saved = localStorage.getItem(getCartStorageKey(userId));
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function CartProvider({ children }) {
  const { products } = useContext(ProductsContext);
  const [userId, setUserId] = useState(() => getUser()?.id ?? null);
  const [cart, setCart] = useState(() => loadCart(getUser()?.id ?? null));

  useEffect(() => {
    const handleAuthChange = () => {
      const nextUserId = getUser()?.id ?? null;
      setUserId(nextUserId);
      setCart(loadCart(nextUserId));
    };

    window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    return () => window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
  }, []);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(getCartStorageKey(userId), JSON.stringify(cart));
    }
  }, [cart, userId]);

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

  const clearCart = () => {
    if (userId) {
      localStorage.setItem(getCartStorageKey(userId), JSON.stringify([]));
    }
    setCart([]);
  };

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
