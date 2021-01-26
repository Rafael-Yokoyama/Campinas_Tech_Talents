
function programador(objeto:dev, array:string[]) {
	// não precisa desenvolver nada aqui
}

interface dev {
    nome: string,
    idade: number,
    empresa:string
    famoso:boolean
}

const dev = {
  nome: 'Bill Gates',
  idade: 60,
  empresa: 'Microsoft',
  famoso: true
}
const produtos: string[] = ["Azure", "VS Code", "Office"]
programador(dev, produtos)

