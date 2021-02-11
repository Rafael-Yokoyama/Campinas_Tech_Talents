import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios'
import { Product } from '../types';


const Home = () => {



  const [produtos, setProdutos] =useState<Product[]>([])

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(resposta => setProdutos(resposta.data))
  }, [])

  return (
    <>
    

      {produtos.map((item: Product) => (
        <div  key={item.id}>
      
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p><br/>
          <Link to={`produto/${item.id}`}>Comprar</Link>
          <hr/>
        </div>  
      ))}
    </>
  );
}

export default Home;