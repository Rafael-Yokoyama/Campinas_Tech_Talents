import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ProductType } from "../../types/product";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>();
  const [permission, setPermission] = useState<Boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setPermission(true);
    } else {
      setPermission(false);
    }
  }, []);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    axios
      .get("http://localhost:4000/products", { headers: headers })
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      {!permission && <Redirect to="/" />}
      {products?.map((i: ProductType) => (
        <>
          <h1>{i.title}</h1>
          <p>{i.description}</p>
          <p>{i.price}</p>
          <img src={i.image} width="200px" alt="img" />
        </>
      ))}
    </>
  );
};

export default Products;
