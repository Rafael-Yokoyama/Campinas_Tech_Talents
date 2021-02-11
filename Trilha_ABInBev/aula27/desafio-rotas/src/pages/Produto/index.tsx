import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ParamsI, Produtos } from "../../types";

const Product = () => {
  const params = useParams<ParamsI>();
  const [produto, setProduto] = useState<Produtos>();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((resposta) => setProduto(resposta.data));
  }, []);

  return (
    <div>
      <h1> selected item: </h1>
      {produto !== null && (
        <div className="container">
          <div className="info">
            <img src={produto?.image} />

            <div className="description_1">
              <h2>{produto?.title}</h2>
              <p className="description">{produto?.description}</p>
              <p className="hastgad">#{produto?.category}</p>
              <p>U$ {produto?.price}</p>
              <Link to="/" className="button">
                back to shop
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
