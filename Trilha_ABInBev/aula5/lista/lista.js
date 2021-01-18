    class Lista {
      constructor() {
        this.inputItem = document.querySelector("#item")
        this.botaoAdicionar = document.querySelector("#adicionar")
        this.lista = document.querySelector("#lista")
        this.botaoApagar = document.querySelector("#apagar")
      }

      apagarLista() {
        // implementar apagar do html
        localStorage.clear()
        
      }
      adicionarNaLista(minhaLista) {
        // loop

        let listaHTML = ''
        minhaLista.map( (dados) => {
          listaHTML += 
          `
          <li>
              ${dados}
          </li>
          `
        })
        this.lista.innerHTML = listaHTML

      }
    }