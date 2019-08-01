# BackstopJS - Propriedades dos Cenários:

* id: nome do projeto do qual será feita a de regressão visual

* viewport: podemos definir quantos quiser e as resoluções


# Dentro de Scenarios

* scenarios: a propriedade scenarios é um array. Dentro desse array, temos cenários, que são objetos JavaScript

* label: Além de ser o Nome do cenário, é a Tag que salva as imagens de referência

* url: URL do estado da aplicação

* onReadyScript: é executado depois do URL, readySelector... Conseguimos modificar o estado da interface do usuário antes de bater o screenshot. Passamos o path relativo de uma arquivo com passos necessários para executar, e estar no estado que precisamos.

* referenceUrl: usamos para fazer comparação entre ambientes PROD com DEV, ou DEV com HOM.

* readySelector: seletor que precisa estar disponível na tela, antes do backstopjs ir ao próximo passo

* hideSelectors: é um array de seletores. Ele esconde elementos dinâmicos da tela, para não interferir nos resultados dos testes de regressão visual.

* removeSelectors: É um array de seletores. Utilizado para remover elementos da aplicação. Exemplo: verificar um estado inicial da aplicação quando não temos dados criados

* hoverSelector: para a seta do mouse em cima de um elemento antes de tirar screenshot

* clickSelector: clicar no elemento presente no DOM antes de tirar screenshot (disponível com o padrão onReadyScript)

* postInteractionWait: é um wait que coloca depois de um click que vai para outra tela, e nele colocamos o elemento da outra tela que ele vai esperar para bater o screenshot. (Disponível com onReadyScript padrão)

* "selectors": ["html"] --> se eu remover do cenário, pega a tela inteira, se manter, pega o estado inicial da aplicação quando o usuário acessa

* selectors: é um array que pode receber diversos seletores. Usado para tirar screenshot de apenas um ou mais elementos específicos da tela

* selectorExpansion: quando está 'true', quando passamos o seletor em "selectors", se ele se repetir na página, ele vai tirar screenshots dos elementos na página que tenham esse seletor em específico.

* "expect": 0, -> captura os elementos da linha de uma tabela de um comando a cima que pegue a tabela, e da um expect se o elemento de 5 linhas ou se tem 10 linhas, como vc definir. Caso não queira fazer essa verificação, colocar zero ou não colocar o expect

* misMatchThreshold: Limite de erros. É a porcentagem de pixels diferentes permitidos para passar no teste. Ex: 0,1 é 99%, ou seja, configuramos 1% de chances de erro

* requireSameDimensions: Se definido como true - qualquer alteração no tamanho do seletor acionará uma falha de teste.


# Dentro de Paths

* report: abrir relatório no browser após a execução dos testes

* asyncCaptureLimit: a quantidade de testes em paralelo que podemos rodar


## SCRPT CUSTOMIZADO:

```
goToEditForm.js

module.exports = function (chromy) {
  chromy
    .wait(".item-view")
    .click(".item-view")
    .wait(".update-button")
    .click(".update-button")
    .wait("form");
};
```

* Função que é exportada como 'module.exports'
* Recebe como argumento 'chromy', que é a engine que vai estar executando os testes no navegador, engine utilizada para o navegador chrome
* usamos os comandos e seletores para as ações