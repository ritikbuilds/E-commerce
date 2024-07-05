import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    emptyCart: (cart, action) => {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },

    addItemToCart: (cart, action) => {
      for (let Item of cart) {
        if (Item.id === action.payload.newItem.id) {
          alert("Item already added to cart");
          return cart;  
        }
      }
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, action.payload.newItem])
      );
      return [...cart, action.payload.newItem];
    },

    removeItemFromCart: (cart, action) => {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.filter((cartItem) => cartItem.id !== action.payload.id)
        )
      );
      return cart.filter((cartItem) => cartItem.id !== action.payload.id);
    },

    increaseQty: (cart, action) => {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
              return cartItem;
            }
          })
        )
      );
      return cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
    },
    setArrivingOn: (cart, action) => {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, arrivingOn: action.payload.arrivingOn };
        } else {
          return item;
        }
      });
    },
    decreaseQty: (cart, action) => {
      localStorage.setItem(
        "cart",
        JSON.stringify(
          cart.map((cartItem) => {
            if (cartItem.quantity <= 1) {
              return cartItem;
            }
            if (cartItem.id === action.payload.id) {
              return { ...cartItem, quantity: cartItem.quantity - 1 };
            } else {
              return cartItem;
            }
          })
        )
      );

      return cart.map((cartItem) => {
        if (cartItem.quantity <= 1) {
          return cartItem;
        }
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQty,
  decreaseQty,
  emptyCart,
  setArrivingOn,
} = cartSlice.actions;
export default cartSlice.reducer;
