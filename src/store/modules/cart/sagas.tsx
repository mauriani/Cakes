// configurações do saga

import { all, takeLatest, select, call } from "redux-saga/effects";
import { IState } from "../..";
import { addProductToCartRequest } from "./actions";

import api from "../../../services/api";
import { AxiosResponse } from "axios";

type CheckProductStockRquest = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

// função para verificar o stock
function* checkProductStock({ payload }: CheckProductStockRquest) {
  const { product } = payload;
  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log(currentQuantity);

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );
  console.log(availableStockResponse.data.quantity);

  if (availableStockResponse.data.quantity > currentQuantity) {
    console.log("deu");
  } else {
    console.log("falta");
  }
}

// all - função que recebe um array dentro dele
// select - busca informações do meu state
export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock),
]);
//pARAMETROS DA FUNÇÃO ACIMA
// 1-  qual action quero ouvir
// 2 - qual função quero executar
