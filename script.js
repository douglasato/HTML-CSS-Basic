function buscar(){
    var entrada = document.getElementById("entrada").value.toLowerCase()

    var url = "https://pokeapi.co/api/v2/pokemon/" +entrada+"";
    
    // var contador = 0
    // if(entrada.lenght < 1 ){
    //     entrada = contador
    // }

    //busca, traz a url -> pega o conteudo da api
    fetch(url)
    .then(response => response.json())
    .then(data => {
        var tela = document.getElementById('tela')
        
        tela.innerHTML = 

        '<h2>' + data.name + '<h2>'

        +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif"; > '

        +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif"; > <br> <br>'
        
        + '<p> Id: ' + data.id + '</p>'
        + '<p> Tipo: ' + data.types.map(type => type.type.name) + '</p>'

        + '<p> Habilidades: ' + data.abilities.map(abilities => abilities.ability.name) + '</p>'

        // contador = data.id

        document.getElementById("entrada").value = '' // limpa o input

    }).catch(erro =>{
        var tela = document.getElementById('entrada');
        tela.innerHTML = '<p>Pokémon não encontrado ! erro: ' + erro
    })
}