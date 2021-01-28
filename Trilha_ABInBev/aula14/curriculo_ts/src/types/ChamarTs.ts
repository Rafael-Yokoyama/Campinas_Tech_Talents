import Contato from './Contato';
import Educacao from './Educacao';
import Experiencia from './Experiencia';


export interface ChamarTs {
    nome: string,
    ocupacao: string,
    resumo: string,
    perfilProfissional: string,
    contatos: Contato[],
    educacao: Educacao[],
    experiencia: Experiencia[]
}

export  interface ChamarDadosTs {
    resposta: ChamarTs
}