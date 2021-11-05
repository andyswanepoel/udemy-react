import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  let updatedItems;

  if (action.type === "ADD_TO_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const itemToAddIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (itemToAddIndex > -1) {
      updatedItems = state.items.map((item) => {
        if (item.id === action.item.id) {
          return { ...item, amount: item.amount + action.item.amount };
        }
        return item;
      });
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const itemToRemoveIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updatedTotalAmount =
      state.totalAmount - state.items[itemToRemoveIndex].price;

    updatedItems = state.items
      .map((item) => {
        if (item.id === action.id) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((items) => items.amount > 0);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_TO_CART", item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_FROM_CART", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart,
    removeItemFromCart
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
