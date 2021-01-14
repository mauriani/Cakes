import { all } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga() {
  // meu await
  return yield all({
    cart,
  });
}
