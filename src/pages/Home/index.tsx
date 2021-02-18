import React from "react";
import { Link } from "react-router-dom";

import cake from "../../assets/cake.svg";

import { Landing, Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Landing>
      <Container>
        <div>
          <strong>Bolos JuCakes 30 anos a verdadeira arte em bolos</strong>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          <Link to="/catalog" className="acc-catalog">
            <button type="button">Acessar Catálogo</button>
          </Link>
        </div>
        <div className="image">
          <img src={cake} alt="cake" />
        </div>
      </Container>
    </Landing>
  );
};

export default Home;
