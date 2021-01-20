import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";
import { IState } from "../../store";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  // verifica se meu produto está dentro da lista de falha, ou seja, não tem mais no stock
  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>
      {"  "}
      <button onClick={handleAddProductToCart} type="button">
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>Falta de Estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
