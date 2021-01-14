import { Reducer } from "redux";
import producer from "immer";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantify++;
        } else {
          draft.items.push({
            product,
            quantify: 1,
          });
        }

        /*return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quality: 1,
          },
        ],
      };*/
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
