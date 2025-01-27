let tetoNumerico = 100;
let numeroSecreto = Math.floor(Math.random() * tetoNumerico) + 1;
let chute;
let contador = 0;

while (chute != numeroSecreto) {
  chute =  Number(prompt(`Digite um número entre 1 e ${tetoNumerico}`));
  contador++;

  let palavraTentativa = contador > 1 ? "tentativas" : "tentativa";

  if (contador == 10) {
    alert("Suas tentativas acabaram...");
    break;
  }

  if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${contador} ${palavraTentativa}!`);
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
  }
}
