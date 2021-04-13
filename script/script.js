const filmesInput = document.querySelector(".movies")

buscarDados()
function buscarDados(){
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");

    promessa.then(processarResposta)
    promessa.catch(tratarErro)
    
}

function processarResposta(resposta){
    const filmes = resposta.data;
    console.log(filmes)
    for(let i=0;i<filmes.length;i++){
        let filmografia = `<div class="movie" id="${filmes[i].id}">
        <img src="${filmes[i].imagem}">
        <div class="title">${filmes[i].titulo}</div>
        <button onclick="enviarDados(${filmes[i].id})">
          Comprar
          <ion-icon name="cart-outline"></ion-icon>
        </button>
      </div>`
      filmesInput.innerHTML += filmografia
    }
}

function enviarDados(numeroFilme){
    const nomeCliente = prompt("Qual o seu nome?")
    const qtdAssentos = prompt("Quantidade de assentos?")
    const pedido = {nome: nomeCliente, quantidade: qtdAssentos}
    const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${numeroFilme}/ingresso`,pedido)
    console.log(numeroFilme)
    console.log(nomeCliente)
}

function tratarErro(){

}