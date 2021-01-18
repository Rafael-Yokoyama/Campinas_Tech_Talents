class Carro {
    constructor(marca,modelo,cor){
        this.marca = marca
        this.modelo = modelo
        this.cor= cor
        
    }

    acelerar(){                        // métodos
        return "acelerou demais"
    }
    freiar(){
        return "freiou"
    }

}

const Uno = new Carro ("Uno", "aaa" , "blue")  // objetos
console.log(Uno)

console.log(Uno.acelerar())

const Caminhonete = new Carro ("Caminhonete","bbb ", "blue" )
console.log(Caminhonete)
console.log(Caminhonete.freiar())