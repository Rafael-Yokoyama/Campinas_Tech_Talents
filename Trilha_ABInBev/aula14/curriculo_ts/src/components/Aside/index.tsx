import React, { useState } from "react";
import Contato from "../../types/Contato";
import Educacao from "../../types/Educacao";
import { ChamarDadosTs } from "../../types/ChamarTs";

function Aside(props: ChamarDadosTs) {
  const [showContact, setContact] = useState<boolean>(false);
  const { contatos, educacao } = props.resposta;

  const toggle = () => {
    setContact(!showContact);
  };

  return (
    <>
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={toggle}>Mostrar Contatos</button>
          {showContact && (
            <div className="lista-de-contatos">
              {contatos.map((item: Contato) => (
                <li key={item.id}>
                  <div className="item-contato">
                    <h4>{item.tipo}</h4>
                    <p>{item.contato}</p>
                  </div>
                </li>
              ))}
            </div>
          )}
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          <div className="lista-de-formacao">
            {educacao.map((item: Educacao) => (
              <li key={item.id}>
                <h4>{item.curso}</h4>
                <p>{item.instituicao}</p>
              </li>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}

export default Aside;
