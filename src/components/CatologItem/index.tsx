import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartRequest } from "../../store/modules/cart/actions";
import { IProduct } from "../../store/modules/cart/types";
import { IState } from "../../store";

import { ProductList, Product } from "./styles";

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

  console.log(product);
  return (
    <ProductList>
      <li>
        <Product>
          <img src={product.img} alt={product.title} />

          <div>
            <text>Title {product.title}</text>

            <strong>Região {product.region}</strong>

            <strong>Volume {product.volume}</strong>

            <strong>R$ {product.price}</strong>
          </div>
        </Product>

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
