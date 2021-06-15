let verificaNumero = []
function geraNumeroAleatorio() {
    return Math.floor(Math.random() * 671) + 1;
}

function formataPersonagens(data) {


    document.getElementById("home").innerHTML = document.getElementById("home").innerHTML +
        `<div class = 'container-personagem'>

     <label id="nome"> ${data.name} </label>
     <label>Espécie: ${data.species} </label>
     <label>Gênero: ${data.gender} </label>
     <div> <img src = '${data.image}'/></div>
 
    </div>
    
    `;
}

for (let contador = 0; contador < 4; contador++) {
    let numeroAleatorio = geraNumeroAleatorio()
    if (verificaNumero.indexOf(numeroAleatorio) > -1) { //verifica se ja existe
        contador--  //decrementa -1
        console.log('já sorteado');

    }

    else {
        verificaNumero.push(numeroAleatorio)
        fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`)
            .then(Response => Response.json()).then((Response) => {
                formataPersonagens(Response)
            }).catch((e) => {
                console.log(e);
            })
    }
}
