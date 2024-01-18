alert ('Boas vindas ao jogo secreto');
let numeroSecreto = 5;
// console.log(numeroSecreto) (Informa ao console log o valor da variável numeroSecreto)
let chute = 0
let tentativa = 0
while (chute != numeroSecreto) {
    tentativa += 1
   chute = prompt('Escolha um número entre 0 e 10.'); 
   
   if (numeroSecreto == chute) {
    alert (`Você acertou na ${tentativa}° tentativa! O número era ${numeroSecreto}`);
    }   
    else {
        if (chute > numeroSecreto){
            alert(`O número ${chute} é maior! Tente novamente.`);
        } else { 
            alert(`O número ${chute} é menor! Tente novamente.`);
        }}
}