import axios from 'axios';
import React, { useState } from 'react';
import { CepDados } from './types/dados';

function App() {
  const [Cep, setCep] = useState<String>('')
  const [dados, setDados] = useState<CepDados>()

  const getDados = () => {
    axios.get(`https://viacep.com.br/ws/${Cep}/json/`)
      .then(resposta => setDados(resposta.data))
  }

  return (
    <div className="App">
      <input type="text" placeholder="Digite aqui o CEP" onChange={(e) => setCep(e.target.value)} />
      <button onClick={getDados}>Procurar endereço</button>

      {
        <>
          <h1>Resultado do CEP:</h1>
          <p>CEP: {dados?.cep}</p>
          <p>Endereço: {dados?.logradouro}</p>
          <p>Complemento: {dados?.complemento}</p>
          <p>Bairro: {dados?.bairro}</p>
          <p>Localidade: {dados?.localidade}</p>
          <p>Estado: {dados?.uf}</p>
          <p>IBGE: {dados?.ibge}</p>
          <p>GIA: {dados?.ibge}</p>
          <p>DDD: {dados?.ddd}</p>
          <p>Siafi: {dados?.siafi}</p>
        </>
      }

    </div>
  );
}

export default App;