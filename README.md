# Estudo Dirigido — CSS: Flexbox (parte 2)

## 1. Revisão da parte 1

1. O contêiner é o elemento pai e os itens são os filhos diretos dele. O display: flex fica no contêiner.

2. O eixo principal fica na horizontal, da esquerda para a direita, porque o padrão é row.

## 2. Crescer: flex-grow

3. A sobra é o espaço livre que fica na faixa depois que os itens ocupam o tamanho deles. Quando todos têm flex-grow: 0, ninguém distribui a sobra e ela fica vazia na faixa.

4. O valor padrão de flex-grow é 0, o que significa que o item não cresce e fica só do tamanho dele.

5. A mesa é o contêiner. O prato de cada pessoa é o tamanho de cada item. A sobra é a pizza que sobrou para dividir. O peso do flex-grow é quantas fatias cada pessoa pega.

6. A declaração é flex-grow: 1. Ela vai na marca, que é um item, e os links ficam com flex-grow: 0.

7. A soma dos pesos é 2 + 3 + 1 = 6. Uma parte vale 600 ÷ 6 = 100px. O primeiro item fica com 2 × 100 = 200px, o segundo com 3 × 100 = 300px e o terceiro com 1 × 100 = 100px.

8. Os itens ocupam 100 + 100 + 100 = 300px, então sobram 600 − 300 = 300px. A soma dos pesos é 0 + 1 + 2 = 3, então uma parte vale 300 ÷ 3 = 100px. O primeiro fica com 100px, o segundo com 100 + 100 = 200px e o terceiro com 100 + 200 = 300px.

## 3. Encolher: flex-shrink

9. O flex-shrink entra em ação quando falta espaço. O valor padrão é 1.

10. Os itens somam 400 + 400 = 800px, então faltam 800 − 600 = 200px. Como os dois são iguais, cada um encolhe 100px e fica com 300px.

11. O primeiro não encolhe e fica com 400px. O segundo encolhe os 200px que faltam e fica com 400 − 200 = 200px. Como 400 + 200 = 600px, o conjunto cabe na faixa.

12. A logo de um menu deveria ter flex-shrink: 0. Assim ela não fica amassada quando a tela diminui.

## 4. Tamanho de partida e atalho flex

13. O flex-basis é o tamanho de partida do item, antes de repartir a sobra ou de encolher. Quando o item tem width: 200px e flex-basis: 10rem, vale o flex-basis, porque ele tem prioridade sobre o width.

14. Com flex-basis: 0 os itens começam com tamanho zero. Assim a faixa inteira conta como sobra e o flex-grow reparte tudo.

15.

| Atalho | grow | shrink | basis |
|---|---|---|---|
| flex: initial | 0 | 1 | auto |
| flex: 1 | 1 | 1 | 0 |
| flex: auto | 1 | 1 | auto |
| flex: none | 0 | 0 | auto |

16. Com flex: 1 a base é 0, então os 600px são repartidos igualmente e cada item fica com 300px. Com flex: auto a base é o conteúdo, então os itens ocupam 100 + 300 = 400px e sobram 200px. Cada um recebe 100px e ficam com 200px e 400px. Os resultados diferem porque o flex: 1 começa do zero e o flex: auto começa do tamanho do conteúdo.

17. Verdadeiro. Quando os conteúdos são iguais, os itens têm a mesma base. Então a sobra é repartida igualmente e o resultado é o mesmo do flex: 1.

## 5. O mínimo que trava o encolhimento

18. A propriedade que segura o item é o min-width, que por padrão é auto e usa o tamanho mínimo do conteúdo. O ajuste que solta é min-width: 0.

19. Isso aparece quando o texto do miolo tem uma palavra muito longa, como um link ou um código, ao lado do menu. O texto estoura a faixa e empurra o menu.

## 6. order e align-self

20. (a) A ordem na tela é C, A, B, porque o C tem order: -1.

(b) A ordem de foco ao apertar Tab segue o HTML, então é A, B, C.

(c) O leitor de tela lê na ordem do HTML. Por isso a pessoa ouve uma ordem diferente da que vê na tela.

21. O valor padrão de order é 0. Entre order: -1 e order: 2, aparece primeiro o de -1.

22. Com align-self: flex-end, o filho vai para o fim do eixo cruzado e não estica. Com align-self: auto, ele segue o pai e estica, por causa do stretch.

23. O align-items é usado no contêiner para alinhar todos os itens do mesmo jeito. O align-self é usado quando só um item precisa de alinhamento diferente.

## 7. A página com miolo

24. Os itens de .pagina são header, .miolo e footer. Os itens de .miolo são aside e main.

25. Ser item de .pagina não organiza os filhos do .miolo. Para o aside e o main ficarem lado a lado, o .miolo também precisa ser contêiner, com display: flex.

26. No .pagina, o display: flex cria o contêiner, o flex-direction: column coloca topo, miolo e rodapé um embaixo do outro, e o min-height: 100vh faz a página ter no mínimo a altura da tela. No .miolo, o display: flex deixa menu e texto lado a lado e o flex: 1 faz ele ocupar a sobra da altura, empurrando o rodapé para baixo. No aside, o flex: 0 0 10rem faz o menu não crescer, não encolher e ter sempre 10rem. No main, o flex: 1 ocupa o resto da largura e o min-width: 0 deixa o texto encolher sem estourar.

## 8. Erros comuns e síntese

27. O erro é escrever o flex-grow: 1 no contêiner, porque ele só funciona nos itens. A correção é escrever nos filhos.

28. Uma forma é usar min-width: 0 no item, e isso serve quando o texto longo precisa encolher e quebrar. Outra forma é usar flex-wrap: wrap no contêiner, e isso serve quando os itens podem passar para a linha de baixo.

29. O flex-basis define o tamanho de partida do item. O flex-grow define quanto da sobra o item recebe. O flex-shrink define quanto o item encolhe quando falta espaço. O order muda a ordem visual dos itens sem mexer no HTML. O align-self muda o alinhamento de um único item no eixo cruzado.
