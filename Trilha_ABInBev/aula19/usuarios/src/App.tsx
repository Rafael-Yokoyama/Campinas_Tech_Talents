import axios from "axios";
import React, { useRef } from "react";

function App() {
  let inputNome = useRef<HTMLInputElement>(null);
  let inputIdade = useRef<HTMLInputElement>(null);
  let inputEmpresa = useRef<HTMLInputElement>(null);
  let inputTelefone = useRef<HTMLInputElement>(null);
  let inputId = useRef<HTMLInputElement>(null);

  const postOnApi = () => {
    const name = inputNome.current?.value;
    const age = inputIdade.current?.value;
    const company = inputEmpresa.current?.value;
    const phone = inputTelefone.current?.value;
    const id = inputId.current?.value;

    axios.post("http://localhost:4000/users", {
      name: name,
      age: age,
      company: company,
      phone: phone,
      id: id, 
    });
  };

  return (
    <div className="App">
      <h2>Usuarios</h2>
      <input type="text" ref={inputNome} placeholder="Nome" />
      <input type="text" ref={inputIdade} placeholder="Idade" />
      <input type="text" ref={inputEmpresa} placeholder="Empresa" />
      <input type="text" ref={inputTelefone} placeholder="Celular" />
      <button onClick={postOnApi}>Enviar</button>
    </div>
  );
}

export default App;
