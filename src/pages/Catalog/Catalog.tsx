import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { IProduct } from "../../store/modules/cart/types";

import CatalogItem from "../../components/CatologItem";
import Container from "../../components/Container";

import { Product } from "./styles";

function Catalog() {
  // Carregando dados da API
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <Container>
      <Product>
        {catalog.map((product) => (
          <CatalogItem key={product.id} product={product} />
        ))}
      </Product>
    </Container>
  );
}

export default Catalog;
