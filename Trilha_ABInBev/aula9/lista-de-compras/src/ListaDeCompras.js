import Item from "./Item";

const ListaDeCompras = () => {
  return (
    <p>
      <Item nome="O Arroz do seu Jão" cor="blue " preco="R$8,00" />
      <Item nome=" O Feijão da Tia Ria " cor="green" preco="R$10,00" />
      <Item nome=" O Cuscuz do seu Roberto " cor="brown" preco="R$12,00" />
      <Item nome="A Farinha da Josefina" cor="yellow" preco="R$9,00" />
      <Item nome="O Sorvete do seu Paulo" cor="purple" preco="R$11,00" />
    </p>
  );
};

export default ListaDeCompras; 

