// configurações do saga

import { all, takeLatest } from "redux-saga/effects";

// função para verificar o stock

function checkProductStock() {
  console.log("ADD");
}

// all - função que recebe um array dentro dele
export default all([takeLatest("ADD_PRODUCT_TO_CART", checkProductStock)]);
//pARAMETROS DA FUNÇÃO ACIMA
// 1-  qual action quero ouvir
// 2 - qual função quero executar
