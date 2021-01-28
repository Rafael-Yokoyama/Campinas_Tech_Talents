import React  from "react";
import { ChamarDadosTs } from '../../types/ChamarTs'


function Header(props:ChamarDadosTs) {
  const { nome, ocupacao, resumo, perfilProfissional } = props.resposta;

  return (
    <>
      <div className="perfil">
        <img src="https://lh3.googleusercontent.com/Px-KPYX1gOAkmiRUEpiUhkevSUiM7izIQpSmXzF44OR6e5F34wigyMA5TZi2sVf8dlfEmQ=s670"  alt="Perfil" />
      </div>
      <div className="biografia">
        <h1>{nome}</h1>
        <div className="ocupacao">{ocupacao}</div>
        <p>{resumo}</p>
      </div>

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>{perfilProfissional}</p>
      </div>
    </>
  );
}

export default Header;
