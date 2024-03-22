export interface Item {
  id: string;
  quantity: number;
}

export interface Order {
  id: number;
  items: Item[];
}

export const enum ActionTypes {
  CLEAR_CART = "CLEAR_CART",
  ADD_ITEM = "ADD_COFFEE_CART",
  INCREMENT_QUANTITY = "INCREASE_QUANTITY",
  DECREMENT_QUANTITY = "DECREASE_QUANTITY",
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM;
      payload: {
        item: Item;
      };
    }
  | {
      type: ActionTypes.INCREMENT_QUANTITY | ActionTypes.DECREMENT_QUANTITY;
      payload: {
        itemId: Item["id"];
      };
    };
