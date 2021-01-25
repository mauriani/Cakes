// quais são as informações que vou manter no meu cart

export enum ActionTypes {
  addProductToCartRequest = "ADD_PRODUCT_TO_CART_REQUEST",
  addProductToCartSuccess = "ADD_PRODUCT_TO_CART_SUCCESS",
  addProductToCartFailure = "ADD_PRODUCT_TO_CART_FAILURE",
}
export interface IProduct {
  id: number;
  img: string;
  title: string;
  volume: string;
  region: string;
  quant: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
