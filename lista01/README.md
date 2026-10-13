# Lista de Exercícios — Flexbox

## parte A

1. b) O `display: flex` fica no elemento pai e organiza os filhos diretos.

2. c) `row` é o valor padrão e deixa os itens em linha.

3. b) O eixo principal fica na horizontal, da esquerda para a direita.

4. b) Com `column`, o eixo principal é vertical, então o `justify-content` distribui os itens de cima para baixo.

5. c) `align-items` alinha os itens no eixo cruzado.

6. c) O valor padrão é `stretch`, que estica os itens no eixo cruzado quando há espaço.

7. b) O primeiro item fica no começo e o último no final, com o espaço distribuído entre eles.

8. b) `wrap` permite que os itens passem para a próxima linha.

9. b) O `align-content` funciona quando há mais de uma linha no contêiner.

10. b) `gap` cria espaço entre os itens, sem deixar espaço extra nas bordas.

11. c) `row-reverse` inverte a direção visual dos itens na horizontal.

12. a) `justify-content: center` e `align-items: center` centralizam nos dois eixos.

## parte B

13. O contêiner flex é o elemento pai que recebe `display: flex`. Os filhos diretos dele viram itens flex e passam a ser organizados pelo Flexbox.

14. A, B e C ficam um embaixo do outro, porque a direção é `column`. Como o contêiner tem 300px de altura e usa `justify-content: center`, os três ficam centralizados verticalmente.

15. Sem `flex-direction: column`, a direção volta a ser `row`, então os itens ficam lado a lado. Como o padrão de `flex-wrap` é `nowrap`, eles não passam para outra linha se não couberem.

16. Com `row`, `justify-content` atua na horizontal e `align-items` na vertical. Com `column`, `justify-content` atua na vertical e `align-items` na horizontal.

17. O `align-content` não tem efeito com apenas uma linha. Para funcionar, é preciso ter mais de uma linha, usando `flex-wrap: wrap`, e espaço livre no contêiner.

18. O `gap: 16px` coloca espaço só entre os itens. Com `margin-right: 16px`, também sobra espaço depois do último item.
