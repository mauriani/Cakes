import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";
import { IState } from "../../store";

import { ProductList } from "./styles";

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

  console.log(hasFailedStockCheck);
  return (
    <ProductList>
      <li key={product.id}>
        <img src={product.img} alt={product.title} />
        <strong>Produto: {product.title}</strong>
        <span>R$ {product.price}</span>
        {hasFailedStockCheck ? (
          <button type="button" style={{ backgroundColor: "#e85d04" }}>
            Falta Em Estoque
          </button>
        ) : (
          <button onClick={handleAddProductToCart} type="button">
            Comprar
          </button>
        )}
      </li>
    </ProductList>
  );
};

export default CatalogItem;
