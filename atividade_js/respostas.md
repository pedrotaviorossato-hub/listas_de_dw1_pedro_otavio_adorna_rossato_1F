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