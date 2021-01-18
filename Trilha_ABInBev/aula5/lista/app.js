      const bancoLocal = new BancoLocal()
      const lista = new Lista()


      lista.botaoAdicionar.addEventListener("click", () => {
        bancoLocal.gravar(lista.inputItem.value)
        bancoLocal.ler()
        lista.adicionarNaLista(bancoLocal.minhaLista)
      })

      lista.botaoApagar.addEventListener("click", () => {
        // 2 metodos para apagar
        localStorage.clear()
        lista.lista.innerHTML = ''
      })

      window.addEventListener("DOMContentLoaded", () => {
        bancoLocal.ler()
        lista.adicionarNaLista(bancoLocal.minhaLista)
      })