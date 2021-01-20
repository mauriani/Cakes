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

  return (
    <ProductList>
      <li>
        <img src={product.img} alt={product.title} />
        <strong>{product.title}</strong> {" - "}
        <span>{product.price}</span>
      </li>
    </ProductList>
  );
};

export default CatalogItem;
