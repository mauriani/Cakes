import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartState } from "../../store/modules/cart/types";

import { Container } from "./styles";

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  return (
    <Container>
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
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Cart;
