import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Produtos } from "../../types";

const Home = () => {
  const [produto, setProduto] = useState<Produtos[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resposta) => setProduto(resposta.data));
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div className="home">
        {setProduto !== null &&
          produto.map((item: Produtos) => (
            <div className="card" key={item.id}>
              <h4>{item.title}</h4>

              <div>
               
                <img src={item?.image} width="30px" />
              </div>
              <span>U$ {item.price}</span>
              <Link to={`/produto/${item.id}`} className="button">
                Buy
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
