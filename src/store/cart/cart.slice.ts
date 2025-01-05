import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryItem } from "../categories/category.slice";

// Structure of a product to add
export type CartItem = CategoryItem & {
  quantity: number;
};

// Initail state structure
export interface CartState {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
}

export const CartInitialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

// Utility function to add an item to the cart
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem._id === productToAdd._id 
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === productToAdd._id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// utility function to remove item from cart
const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem._id === cartItemToRemove._id 
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) =>
        !(
          cartItem._id === cartItemToRemove._id 
        )
    );
  }
  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Utility function to clear an item from the cart
export const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id);

// Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState: CartInitialState,
  reducers: {
    setIsCartOpen(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action: PayloadAction<CategoryItem>) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
      console.log("Cart State after adding item:", state.cartItems);
    },
    removeItemFromCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});

export const {
  setIsCartOpen,
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
