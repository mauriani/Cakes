import { ActionTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}
export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}
export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}

export function updateQuantityRequest(productId: number, quantity: number) {
  return {
    type: ActionTypes.updateQuantityRequest,
    payload: {
      productId,
      quantity,
    },
  };
}

export function updateQuantitySuccess(productId: number, quantity: number) {
  return {
    type: ActionTypes.updateQuantitySuccess,
    payload: {
      productId,
      quantity,
    },
  };
}
