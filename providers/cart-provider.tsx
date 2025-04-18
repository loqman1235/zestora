"use client";

import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { CartItemType } from "@/types/cart";

type CartContextType = {
  cart: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: string) => void;
  decrementQuantity: (id: string) => void;
  incrementQuantity: (id: string) => void;
  clearCart: () => void;
  subTotal: number;
};

const CartContext = createContext<CartContextType | null>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decrementQuantity: () => {},
  incrementQuantity: () => {},
  clearCart: () => {},
  subTotal: 0,
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useLocalStorage<CartItemType[]>("cart", []);

  const addToCart = (item: CartItemType) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((val) => val.id === item.id);

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const decrementQuantity = (id: string) => {
    setCart((prevCart) => {
      const targetItemIndex = prevCart.findIndex((item) => item.id === id);

      if (targetItemIndex !== -1) {
        const updatedCart = [...prevCart];

        updatedCart[targetItemIndex].quantity -= 1;

        if (updatedCart[targetItemIndex].quantity === 0) {
          updatedCart.splice(targetItemIndex, 1);
        }

        return updatedCart;
      }

      return prevCart;
    });
  };

  const incrementQuantity = (id: string) => {
    setCart((prevCart) => {
      const targetItemIndex = prevCart.findIndex((item) => item.id === id);

      if (targetItemIndex !== -1) {
        const updatedCart = [...prevCart];

        updatedCart[targetItemIndex].quantity += 1;

        return updatedCart;
      }

      return prevCart;
    });
  };

  const subTotal = useMemo(
    () =>
      cart.reduce((subTotal, item) => subTotal + item.price * item.quantity, 0),
    [cart],
  );

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decrementQuantity,
        incrementQuantity,
        clearCart,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
