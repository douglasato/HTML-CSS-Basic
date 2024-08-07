function escolherOpcao() {
    var opcao1 = document.querySelector("#input1").value
    var opcao2 = document.querySelector("#input2").value

    var opcoes = [opcao1, opcao2]

    var escolhaAleatoria = opcoes[Math.floor(Math.random())*opcoes.length]

    document.getElementById('resultado').innerHTML = `o polvo escolheu:  ${escolhaAleatoria}`;


}