import React from "react";
import { useSelector } from "react-redux";
import { MdRemoveCircleOutline, MdAddCircleOutline } from "react-icons/md";

import { IState } from "../../store";
import {
  ICartState,
  IProduct,
  ICartItem,
} from "../../store/modules/cart/types";

import { Container, ProductTable } from "./styles";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  console.log(cart);

  // const dispatch = useDispatch();

  function increment(product: IProduct) {
    console.log(product);
  }
  function decrement(product: IProduct) {
    console.log(cart);
  }

  return (
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
                      onClick={() => decrement(item.product)}
                    >
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>

                    <input type="number" readOnly value={item.quantity} />

                    <button
                      type="button"
                      onClick={() => increment(item.product)}
                    >
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>

                <td>
                  <span>{(item.product.price * item.quantity).toFixed(2)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ProductTable>
    </Container>
  );
};

export default Cart;
