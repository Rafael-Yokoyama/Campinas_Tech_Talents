function programador(objeto: devs, array: string[]) {}

interface devs {
  nome: string,
  idade: number,
  empresa: string,
  famoso: boolean
}
const dev:devs = {
  nome: "Bill Gates",
  idade: 60,
  empresa: "Microsoft",
  famoso: true,
};
const produtos: string[] = ["Azure", "VS Code", "Office"];
programador(dev, produtos);
