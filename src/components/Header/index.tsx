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
        <Link to="/">
          <img src={logo} alt="Wine" />
        </Link>
        <Title>Sobre Nós</Title>
        <Title>Catalógo</Title>
        <Title>Onde Comprar ?</Title>
      </ContainerPages>

      <ContainerIcons>
        <div>
          <FaPhoneAlt size={25} color="#fff" style={{ marginRight: 10 }} />
          <strong>27 3256-5689</strong>
        </div>

        <IoIosSearch size={25} color="#fff" style={{ marginLeft: 20 }} />
        <IoIosCart size={25} color="#fff" style={{ marginLeft: 20 }} />
      </ContainerIcons>
    </Container>
  );
};

export default Header;
