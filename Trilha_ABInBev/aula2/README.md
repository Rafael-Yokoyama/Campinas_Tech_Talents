# Exercícios – 1 e 2

                     Exercício 1 :
  
  -  Crie um arquivo index.html
  -   Criar  uma função para ao pressionar o button  mude a frase do navegador  ("usar o onclick no button ")
![](https://github.com/Rafael-Yokoyama/Campinas_Tech_Talents/blob/main/Trilha_ABInBev/aula2/img/gif_index.gif)

              #  RESOLUÇÃO  # 
              
                  
              <script>
                function mudar() {
                  let texto = document.querySelector("#meu-paragrafo")
                  texto.innerText = "Muito fácil esse troço"
                  texto.style.color = 'yellow';
                }

                function voltar() {
                  let texto = document.querySelector("#meu-paragrafo")
                  texto.innerText = "Esse curso é muito da hora, bicho."
                  texto.style.color = 'white';
                }
              </script>
              
              
        <hr>
        
                          Exercício 2 :
                             

              
 
 -  Crie um arquivo pessoa.html
 -   Criar  uma função para ao pressionar o button  verifica se a pessoa é casada ou solteira
 
 ![](https://github.com/Rafael-Yokoyama/Campinas_Tech_Talents/blob/main/Trilha_ABInBev/aula2/img/gif_pessoa.gif)
 
 
               #  RESOLUÇÃO  # 
                
 
             <script>
                function VerificarPessoa() {

                    let pessoa = {
                        nome: "Andressa",
                        idade: 18,
                        casada: true,
                    }
                    let status = document.querySelector("#status")

                    if (pessoa.casada === true) {

                        status.innerText = `${pessoa.nome} é Casada`

                    } else {
                        status.innerText = `${pessoa.nome} tem  ${pessoa.idade} anos   e é Solteira`
                    }
                }

                function voltar() {
                    let status = document.querySelector("#status")
                    status.innerText = ""
                }
            </script>

       
       
       
       
     
          

     
