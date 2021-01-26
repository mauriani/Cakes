import React from "react";
import { Link } from "react-router-dom";
import { IoIosCart, IoIosSearch } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import logo from "../../assets/logo.png";

import { Container, ContainerPages, ContainerIcons, Title } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ContainerPages>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="Wine" />
          </Link>
        </div>
        <Link to="/story" style={{ textDecoration: "none" }}>
          <Title>Sobre Nós</Title>
        </Link>

        <div>
          <Link to="/catalog" style={{ textDecoration: "none" }}>
            <Title>Catalógo</Title>
          </Link>
        </div>

        <Title>Onde Comprar ?</Title>
      </ContainerPages>

      <ContainerIcons>
        <div>
          <FaPhoneAlt size={23} color="#fff" style={{ marginRight: 10 }} />
          <strong>27 3256-5689</strong>
        </div>

        <div>
          <Link to="/cart">
            <IoIosCart size={23} color="#fff" style={{ marginLeft: 20 }} />
          </Link>
        </div>

        <IoIosSearch size={23} color="#fff" style={{ marginLeft: 20 }} />
      </ContainerIcons>
    </Container>
  );
};

export default Header;
