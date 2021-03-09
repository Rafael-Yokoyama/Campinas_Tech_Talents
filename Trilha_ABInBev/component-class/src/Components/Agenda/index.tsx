import { Component } from "react";
import Contatos from "../Contatos";

interface Contato {
  nome: string;
  numero: string;
}

class Agenda extends Component {
  state = {
    array: [
      { nome: "Cleberson", numero: "1111-1111" },
      { nome: "Maria Joaquina", numero: "0000-0000" },
      { nome: "José Felisbelto ", numero: "2222-2222" },
      { nome: "José Felisbelto ", numero: "2222-2222" },
      { nome: "José Felisbelto ", numero: "2222-2222" },
      { nome: "José Felisbelto ", numero: "2222-2222" },
      { nome: "José Felisbelto ", numero: "2222-2222" },
      { nome: "José Felisbelto ", numero: "2222-2222" },
      { nome: "José Felisbelto ", numero: "2222-2222" },
    ],
    mostrarContatos: false,
  };

  exibircontatos = () => {
    this.state.mostrarContatos
      ? this.setState({ mostrarContatos: false })
      : this.setState({ mostrarContatos: true });
  };

  render() {
    return (
      <div>
          <h1> Convidados para festa do Rafinha</h1>
          
        <button onClick={this.exibircontatos}>Exibir Convidados</button>

        {this.state.mostrarContatos &&
          this.state.array.map((i: Contato) => (
            <Contatos nome={i.nome} numero={i.numero} />
          ))}
      </div>
    );
  }
}

export default Agenda;
