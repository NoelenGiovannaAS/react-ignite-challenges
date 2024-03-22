import { ActionTypes } from "./actions";
import { Actions, Item } from "./interfaces.types";

interface CartState {
  cart: Item[];
}

export const cartReducer = (state: CartState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        cart: [...state.cart, action.payload.item],
      };
    case ActionTypes.INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.find((item) => {
          if (item.id === action.payload.itemId) {
            item.quantity += 1;
          }
        }),
      };

    case ActionTypes.DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.find((item) => {
          if (item.id === action.payload.itemId && item.quantity > 0) {
            item.quantity -= 1;
          }
        }),
      };

    default:
      return state;
  }
};
