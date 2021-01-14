import { IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  // tem que exportar um objeto
  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  // tem que exportar um objeto
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  // tem que exportar um objeto
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
  };
}
