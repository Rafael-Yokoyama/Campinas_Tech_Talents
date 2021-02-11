
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Product } from '../types';


import { useParams } from 'react-router-dom'

const Produto = () => {


  const [parametro, setparametro] = useState<Product>()
  const params = useParams<any>()

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
     .then(resposta => setparametro(resposta.data))
  }, [params.id])

  return (
    <>
  

      <div>
    
        <p>{parametro?.title}</p>
        <p>{parametro?.price}</p>
        <p>{parametro?.description}</p>
      </div>
    </>
  );
}

export default Produto;