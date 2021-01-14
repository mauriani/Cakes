import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  // tem que exportar um objeto
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}
