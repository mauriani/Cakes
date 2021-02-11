// quais são as informações que vou manter no meu cart

export enum ActionTypes {
  addProductToCartRequest = "ADD_PRODUCT_TO_CART_REQUEST",
  addProductToCartSuccess = "ADD_PRODUCT_TO_CART_SUCCESS",
  addProductToCartFailure = "ADD_PRODUCT_TO_CART_FAILURE",
  updateAmountRequest = "UPDATE_AMOUNT_REQUEST",
}
export interface IProduct {
  id: number;
  image: string;
  title: string;
  details: string;
  category: string;
  price: number;
  priceFormatted: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
