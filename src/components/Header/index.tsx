import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartState } from "../../store/modules/cart/types";

import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/logo.png";

import { Container, Cart } from "./styles";

const Header: React.FC = () => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const CardSize = cart.items.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Wine" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{CardSize} itens</span>
        </div>
        <MdShoppingBasket size={30} color="#fff" />
      </Cart>
    </Container>
  );
};

export default Header;
