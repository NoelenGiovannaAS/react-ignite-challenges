import { ActionTypes, Actions, Item } from "./interfaces.types";

export function addNewItemToCartAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions; //this solve the ensure of typestript with the type of this return, validating before running the code
}

export function incrementItemQuantityAction(itemId: Item["id"]) {
  return {
    type: ActionTypes.INCREMENT_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions;
}

export function decrementItemQuantityAction(itemId: Item["id"]) {
  return {
    type: ActionTypes.DECREMENT_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions;
}
export { ActionTypes };
