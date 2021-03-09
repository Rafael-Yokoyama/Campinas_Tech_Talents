import { Component } from "react";

interface Contato {
  nome: string;
  numero: string;
}

class Contatos extends Component<Contato> {
  render() {
    return (
      <div>
        <p>
          {" "}
          {this.props?.nome} ----- {this.props?.numero}
        </p>
      </div>
    );
  }
}

export default Contatos;
