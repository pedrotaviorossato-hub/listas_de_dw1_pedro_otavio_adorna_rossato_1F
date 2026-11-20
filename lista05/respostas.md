**Checkpoint**
1. A mensagem aparecer quando ultilizei o Console.
2. O defer garante que o código só rode depois que a página inteira estiver pronta. Assim, tudo o que o script precisar usar ou modificar já vai existir, evitando erros.
3. Ele não encontraria o arquivo e o codigo do js nunca seria usado.

**Etapa 1:**
*Experimente_Q4*
2 + 3 = 5
"web" + "I" = 'webI'
"5" + 3 = '53'
"5" - 3 = 2
2 + 3 * 4 = 14
(2 + 3) * 4 = 20

*Checkpoint 1*
1. No primeiro ele vai ta somando o número com uma string, resultando em 53. Já o segundo, como o "-" é somente para contas matemáticas, ele converte o ""5"" para int e faz a subtração normalmente.
2. Isso acontece pela ordem de operações. Como o parenteses vem antes da multiplicação, ele vem primeiro, resultando na soma primeiro. No outro caso, como o maior operador é a multiplicação, ela vem primeiro.

**Etapa 2:**
*Checkpoint 2*
1. Vai mostrar o tipo do valor que tem nessa variavel. Mostra se é string, float, etc.
2. Apareceu o undefined. Isso ocorre pois o arquivo não foi inicializado, resultando no erro.
3. Apenas o nome "nota_final" é correto. O segundo não pode pois não pode começar com números; O terceiro não pode pois o hífen significa o opredor de operação no js; O terceiro não pode pois o "$" não é permitido; E o "class" é um caracter reservado.
4. Ele vai somar o +1 e vai dar "16"

**Etapa 3:**
*Chackpoint 3*
1. 
 9 5 14
 3.5
 1
 49
 OlÃ¡, Ana ! 7 dividido por 2 Ã© 3.5.
 8.5
 7.51
 NaN
2. Vai mudar o tipo de dado.
3. 1, 8, 2.5

**Etapa 4:**
*Chackpoint 4*
1. Como tem o >=, vai da "Agradável"(Inclui o 20). Já com 30, vai da "Calor"(Inclui o 30).
2. **Saídas:**
 5 == 5 = true
 5 === 5 = true
 0 == false = true
 0 === false = false
**Por que usar `===`?**
Porque ele compara o **valor** e o **tipo** ao mesmo tempo, evitando que o JavaScript faça conversões automáticas que podem causar erros no código.
3. nota >= 0 && nota <= 10


## Etapa 5

1. Imprime 6.875, pois a soma das notas é 27.5 e, dividindo por 4, temos 6.875.

2. O primeiro elemento fica no índice 0 e o último fica no índice length - 1.

3.
```javascript
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
```

4. Será impresso o número 10, pois o laço soma os números de 1 até 4.

## Etapa 6

1. Imprime undefined, pois a função não está retornando o resultado. Para corrigir, basta adicionar o return:

```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3));
```

2.
```javascript
function ehPar(n) {
  return n % 2 === 0;
}
```

3. O console.log mostra um valor no console, enquanto o return devolve o resultado da função para que ele possa ser usado em outras partes do programa.

## Etapa 7

1. Ocorre um erro porque o JavaScript tenta encontrar elementos que ainda não foram carregados pelo navegador. Por isso, o resultado pode ser null. O defer evita esse problema, esperando o HTML ser carregado.

2. Quando o botão é clicado, o evento é ativado. A variável cliques aumenta em 1 e o novo valor aparece na página, dentro do elemento contador.

3. Porque o valor de cliques precisa mudar a cada clique no botão. O let permite alterar o valor da variável, enquanto o const não permite.

## Etapa 8

1. Porque a divisão é feita antes da soma. Assim, 8 + 6 / 2 resulta em 11. A média correta é (8 + 6) / 2, que resulta em 7. Por isso precisamos usar os parênteses.

2. A função completa fica assim:

```javascript
function notaValida(n) {
  return !Number.isNaN(n) && n >= 0 && n <= 10;
}
```

3. Para validar as notas:

```javascript
if (texto1 === "" || texto2 === "" || !notaValida(n1) || !notaValida(n2)) {
  resultado.textContent = "Informe duas notas entre 0 e 10.";
  return;
}
```

4. Para calcular e mostrar o resultado:

```javascript
const media = calcularMedia(n1, n2);
let situacao;

if (media >= NOTA_MINIMA) {
  situacao = "Aprovado";
} else {
  situacao = "Abaixo da média";
}

resultado.textContent = `Média: ${media.toFixed(1)} - ${situacao}`;
```

5. Testes:

| Nota 1 | Nota 2 | Resultado esperado |
|---|---|---|
| 8 | 7 | Média: 7.5 - Aprovado |
| 5 | 6 | Média: 5.5 - Abaixo da média |
| 6 | 6 | Média: 6.0 - Aprovado |
| 10 | 10 | Média: 10.0 - Aprovado |
| Vazio | 5 | Mensagem de erro |
| 11 | 5 | Mensagem de erro |

6. A média foi calculada em uma função separada para deixar o código mais organizado e permitir que o cálculo seja reutilizado em outras partes do programa.

7. Apenas uma linha precisaria ser alterada, pois a média mínima está guardada na constante NOTA_MINIMA. Basta mudar o valor de 6 para 7.

