// configurações do saga

import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { IState } from "../..";
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
  updateQuantitySuccess,
  updateQuantityRequest,
} from "./actions";

import api from "../../../services/api";
import { AxiosResponse } from "axios";
import { ActionTypes } from "./types";

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;
type CheckQuantityStockRequest = ReturnType<typeof updateQuantityRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

// função para verificar o stock
function* checkProductStock({ payload }: CheckProductStockRequest) {
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

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

function* updateQuantity({ payload }: CheckQuantityStockRequest) {
  const { productId, quantity } = payload;

  if (quantity <= 0) return;

  const response = yield call(api.get, `stock/${productId}`);

  const stock = response.data.quantity;

  if (quantity > stock) {
    toast.error("Quantidade solicitada fora de estoque");
    return;
  } else {
    yield put(updateQuantitySuccess(productId, quantity));
  }
}

// all - função que recebe um array dentro dele
// select - busca informações do meu state
export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
  takeLatest(ActionTypes.updateQuantityRequest, updateQuantity),
]);
//pARAMETROS DA FUNÇÃO ACIMA
// 1-  qual action quero ouvir
// 2 - qual função quero executar
