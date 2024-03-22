import { ReactNode, createContext, useEffect, useReducer } from "react";
import {
  addNewItemToCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
} from "reducers/actions";
import { Item } from "reducers/interfaces.types";
import { cartReducer } from "reducers/reducer";

interface ICartContext {
  cart: Item[];
  addToCart: (item: Item) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
}

export const CartContext = createContext({} as ICartContext);

interface ICartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({
  children,
}: ICartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cart: [] },
    (cartState) => {
      const stateJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );
      if (stateJSON) {
        return JSON.parse(stateJSON);
      }
      return cartState;
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  const addToCart = (item: Item) => {
    dispatch(addNewItemToCartAction(item));
  };

  function incrementItemQuantity(itemId: Item["id"]) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: Item["id"]) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        addToCart,
        decrementItemQuantity,
        incrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
