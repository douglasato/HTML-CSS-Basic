var numerosTentativas = 0;
var n = 0;

function EscolherNumero(){
    n = document.getElementById('inputNumero').value;

    numero.innerHTML = '' //string vazia pra limpar de forma automatica o valor do input

    n = parseInt(Math.random()*101);

    console.log('numero: ' +n);
}

EscolherNumero();

function VerificarNum(){
    var num = document.getElementById(inputNumero).value
    
    if(num > 100 || num < 0){
        alert('Número inválido')
        return;
    }else if(num > n){
        numerosTentativas++;
        alert('o número a ser encontrado é menor')
    }else if(num < n){
        numerosTentativas++;
        alert('O número a ser encontrado é maior')
    }else{
        alert(`Parabéns você acertou em ${numerosTentativas} tentativas!`)
    }
     document.getElementById('inputNumero').value = ''
}
   
