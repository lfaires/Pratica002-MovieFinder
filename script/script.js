const filmesInput = document.querySelector(".movies")

buscarDados()
function buscarDados(){
    const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");

    promessa.then(processarResposta)
    
}

function processarResposta(resposta){
    const filmes = resposta.data;
    console.log(filmes)
    for(let i=0;i<filmes.length;i++){
        let filmografia = `<div class="movie">
        <img src="${filmes[i].imagem}">
        <div class="title">${filmes[i].titulo}</div>
        <button>
          Comprar
          <ion-icon name="cart-outline"></ion-icon>
        </button>
      </div>`
      filmesInput.innerHTML += filmografia
    }
}