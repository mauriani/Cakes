import { Reducer } from "redux";
import producer from "immer";
import { ActionTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return producer(state, (draft) => {
    switch (action.type) {
      // SO ADD SE MINHA FUNCTION DE REQUEST TEM SUCESSO
      case ActionTypes.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      case ActionTypes.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }

      case ActionTypes.updateQuantitySuccess: {
        const { productId, quantity } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === productId
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity = quantity;
        }

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
