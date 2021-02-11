import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { IProduct } from "../../store/modules/cart/types";

import Header from "../../components/Header";
import CatalogItem from "../../components/CatologItem";
import Container from "../../components/Container";

import { formatPrice } from "../../util/index";

import { Product } from "./styles";

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

  console.log(catalog);

  return (
    <>
      <Header />
      <Container>
        <Product>
          {catalog.map((product) => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </Product>
      </Container>
    </>
  );
}

export default Catalog;
