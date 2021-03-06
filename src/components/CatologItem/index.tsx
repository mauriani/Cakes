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

  // Adiciona produto ao carrinho
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <ProductList>
      <li>
        <img src={product.image} alt={product.title} />

        <strong>{product.title}</strong>

        <legend>{product.details}</legend>

        <span>{product.priceFormatted}</span>

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
