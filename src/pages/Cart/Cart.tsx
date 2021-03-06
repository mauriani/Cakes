import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdRemoveShoppingCart,
  MdDeleteForever,
} from "react-icons/md";

import { formatPrice } from "../../util/index";
import { IState } from "../../store";
import { ICartState, IProduct } from "../../store/modules/cart/types";

import { Container, ProductTable, Total } from "./styles";
import {
  removeFromCart,
  updateQuantityRequest,
} from "../../store/modules/cart/actions";
import Header from "../../components/Header";

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

  const totalItems = cart.items.length >= 1;

  return (
    <>
      <Header />
      {totalItems === false ? (
        <Container>
          <span>
            Até o momento você não adicionou nenhum item no carrinho !
            <div>
              <MdRemoveShoppingCart size={35} color="#7159c1" />
            </div>
          </span>
        </Container>
      ) : (
        <Container>
          <ProductTable>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
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
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(removeFromCart(item.product.id))
                        }
                      >
                        <MdDeleteForever size={25} color="#7159c1" />
                      </button>
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
      )}
    </>
  );
};

export default Cart;
