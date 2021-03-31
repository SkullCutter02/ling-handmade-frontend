import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [state, setState] = useState({
    setItem: function (item) {
      setState((old) => ({
        ...old,
        cartItems: [...old.cartItems, item],
        cartItemsAmount: [...old.cartItemsAmount, 1],
      }));
    },
    removeItem: function (item) {
      setState((old) => ({
        ...old,
        cartItems: old.cartItems.filter(
          (cartItem) => cartItem.name !== item.name
        ),
        cartItemsAmount: old.cartItemsAmount.filter(
          (cartItemAmt, index) =>
            index !==
            old.cartItems.findIndex((cartItem) => cartItem.name === item.name)
        ),
      }));
    },
    incrAmt: function (item) {
      setState((old) => ({
        ...old,
        cartItemsAmount: old.cartItemsAmount.map((cartItemAmt, index) => {
          if (
            index ===
            old.cartItems.findIndex((cartItem) => cartItem.name === item.name)
          ) {
            return cartItemAmt + 1;
          } else {
            return cartItemAmt;
          }
        }),
      }));
    },
    decrAmt: function (item) {
      setState((old) => ({
        ...old,
        cartItemsAmount: old.cartItemsAmount.map((cartItemAmt, index) => {
          if (
            index ===
            old.cartItems.findIndex((cartItem) => cartItem.name === item.name)
          ) {
            return cartItemAmt - 1;
          } else {
            return cartItemAmt;
          }
        }),
      }));
    },
    resetCart: function () {
      setState((old) => ({
        ...old,
        cartItems: [],
        cartItemsAmount: [],
      }));
    },
    cartItems: [],
    cartItemsAmount: [],
  });

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    const cartItemsAmount = localStorage.getItem("cartItemsAmount");

    if (cartItems) {
      setState({
        ...state,
        cartItems: JSON.parse(cartItems),
        cartItemsAmount: JSON.parse(cartItemsAmount),
      });
    }
  }, []);

  useEffect(() => {
    if (state.cartItems) {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartItemsAmount",
        JSON.stringify(state.cartItemsAmount)
      );
    }
  }, [state.cartItems, state.cartItemsAmount]);

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};
