import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";
import { IState } from "../../store";
import {
  ICartItem,
  ICartState,
  IProduct,
} from "../../store/modules/cart/types";

import { Container, ProductTable } from "./styles";
import { addProductToCartRequest } from "../../store/modules/cart/actions";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  console.log(cart);

  const dispatch = useDispatch();

  function increment(quantity: ICartItem, product: IProduct) {
    dispatch(addProductToCartRequest(product));
    console.log(quantity, product.id);
  }
  function decrement(quantity: ICartItem, product: IProduct) {
    console.log(quantity, product.id);
  }

  return (
    <>
      <Container>
        <ProductTable>
          <table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.product.id}>
                  <td>
                    <img src={item.product.image} alt={item.product.title} />
                  </td>

                  <td>
                    <strong>{item.product.title}</strong>
                    <span>{item.product.priceFormatted}</span>
                  </td>

                  <td>
                    <div>
                      <button
                        type="button"
                        onClick={() => decrement(item, item.product)}
                      >
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>

                      <input type="number" readOnly value={item.quantity} />

                      <button
                        type="button"
                        onClick={() => increment(item, item.product)}
                      >
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>

                  <td>
                    <span>
                      {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ProductTable>
      </Container>
    </>
  );
};

export default Cart;
