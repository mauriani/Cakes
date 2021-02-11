import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>Bolos JuCakes 30 anos a verdadeira arte em bolos</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <div className="acc-catalog">
          <Link to="/catalog">Acessar Catálogo</Link>
        </div>
      </div>

      <img
        src={
          "https://images.unsplash.com/photo-1503525642560-ecca5e2e49e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=461&q=80"
        }
        alt="Wine"
      />
    </Container>
  );
};

export default Home;
