// defini a classe card
class Card {
  // cria a propriedade lista que contem a tag com ID Lista do HTML
  constructor() {
    this.noticias = document.querySelector("#lista")
  }
  // monta o HTML do card com os dados do JSON
  mostraNoticia(dados) {

    // cria uma variavel que ira armazenar todo esse HTML
    let card = ''
    dados.noticias.map(function (noticia) {
      // adiciona a variavel card todo o HTML com as informações
      // += serve para adicionar sem sobrescrever
      card += `
      <div class="card">
        <h2>${noticia.titulo}</h2>
        <p>${noticia.chamada}</p>
        <p>  <a href="${noticia.link}"> ${noticia.link}</a></p>
      </div>
    
      `


      

     




    })

    this.noticias.innerHTML = card
  }
}