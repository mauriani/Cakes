import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";

import { formatPrice } from "../../util/index";
import { IState } from "../../store";
import { ICartState, IProduct } from "../../store/modules/cart/types";

import { Container, ProductTable, Total } from "./styles";
import { updateQuantityRequest } from "../../store/modules/cart/actions";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const dispatch = useDispatch();

  function increment(product: IProduct, quantity: number) {
    dispatch(updateQuantityRequest(product.id, quantity + 1));
  }
  function decrement(product: IProduct, quantity: number) {
    dispatch(updateQuantityRequest(product.id, quantity - 1));
  }

  let sumTotal = formatPrice(
    cart.items.reduce((sum, product) => {
      return sum + product.product.price * product.quantity;
    }, 0)
  );

  let subTotal = cart.items.map((product) =>
    formatPrice(product.product.price * product.quantity)
  );

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
                        onClick={() => decrement(item.product, item.quantity)}
                      >
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>

                      <input type="number" readOnly value={item.quantity} />

                      <button
                        type="button"
                        onClick={() => increment(item.product, item.quantity)}
                      >
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>

                  <td>
                    <span>{subTotal}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ProductTable>
        <footer>
          <button type="button">Finalizar Pedido</button>
          <Total>
            <span>Total</span>
            <strong>{sumTotal}</strong>
          </Total>
        </footer>
      </Container>
    </>
  );
};

export default Cart;
