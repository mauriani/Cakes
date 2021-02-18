import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { IProduct } from "../../store/modules/cart/types";

import Header from "../../components/Header";
import CatalogItem from "../../components/CatologItem";

import { formatPrice } from "../../util/index";

import { ContainerHeader, Container, Product } from "./styles";

function Catalog() {
  // Carregando dados da API
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    /** exibi products */
    async function loadProducts() {
      const response = await api.get("products");

      const data = response.data.map((catalog: IProduct) => ({
        ...catalog,
        priceFormatted: formatPrice(catalog.price),
      }));
      setCatalog(data);
    }
    loadProducts();
  }, []);

  return (
    <ContainerHeader>
      <Header />
      <Container>
        <Product>
          {catalog.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </Product>
      </Container>
    </ContainerHeader>
  );
}

export default Catalog;
