
/* ETAPA 0
console.log("Olá, JavaScript!");
*/

/* ETAPA 2
const escola = "IFC Concórdia";
let nota1 = 8.5;
let aprovado = false;
let sobrenome;

console.log(typeof escola);
console.log(typeof nota1);
console.log(typeof aprovado);
console.log(typeof sobrenome);

nota1 = 9;
console.log(nota1);
*/

/* ETAPA 3
const a = 7;
const b = 2;

console.log(a + b, a - b, a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

const nome = "Ana";
console.log(`Olá, ${nome}! ${a} dividido por ${b} é ${a / b}.`);

console.log(Number("7.5") + 1);
console.log("7.5" + 1);
console.log(Number("abc"));
*/

/* ETAPA 4
const temperatura = 25;

if (temperatura >= 30) {
  console.log("Calor");
} else if (temperatura >= 20) {
  console.log("Agradável");
} else {
  console.log("Frio");
}

console.log(5 == "5");
console.log(5 === "5");
console.log(0 == false);
console.log(0 === false);
*/

/* ETAPA 5
for (let i = 1; i <= 5; i++) {
  console.log(`Linha ${i}`);
}

const notas = [8, 6.5, 9, 4];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

console.log(soma / notas.length);

notas.push(7);
console.log(notas.length);

for (const n of notas) {
  console.log(n);
}
*/

/* ETAPA 6
function dobro(x) {
  return x * 2;
}

const media = (lista) => {
  let soma = 0;

  for (const n of lista) {
    soma += n;
  }

  return soma / lista.length;
};

console.log(dobro(21));
console.log(media([8, 6.5, 9, 4]));
*/

/* ETAPA 7
const mensagem = document.getElementById("mensagem");
const botao = document.querySelector("#botao");
const contador = document.getElementById("contador");

mensagem.textContent = "O JavaScript está funcionando!";
mensagem.style.color = "green";

let cliques = 0;

botao.addEventListener("click", () => {
  cliques++;
  contador.textContent = cliques;
  botao.textContent = "Clicado!";
});
*/


// ETAPA 8 — CALCULADORA DE MÉDIA

const NOTA_MINIMA = 6;

function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function notaValida(n) {
  return !Number.isNaN(n) && n >= 0 && n <= 10;
}

const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", () => {
  const texto1 = document.getElementById("nota1").value;
  const texto2 = document.getElementById("nota2").value;

  const n1 = Number(texto1);
  const n2 = Number(texto2);

  if (texto1.trim() === "" || texto2.trim() === "" || !notaValida(n1) || !notaValida(n2)) {
    resultado.textContent = "Digite duas notas válidas entre 0 e 10.";
    return;
  }

  const media = calcularMedia(n1, n2);

  let situacao;

  if (media >= NOTA_MINIMA) {
    situacao = "Aprovado";
  } else {
    situacao = "Abaixo da média";
  }

  resultado.textContent = `Média: ${media.toFixed(1)} - ${situacao}`;
});
