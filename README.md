# Testes de Regressão Visual com BackstopJS
* São testes automatizados, que realizam verificações visuais na aplicação com base em screenshots do visual esperado de uma determinada tela, ou seja, uma comparação de pixels é realizada com relação a uma screenshot base, previamente aprovada. Em caso de diferença visual o teste deve ser analisado para aprovação ou reprovação.


## Bibliotecas utilizadas
* Framework de automação: [BackstopJS](https://garris.github.io/BackstopJS/)
* Lib para gerenciar o browser via Node: [Puppeteer](https://github.com/GoogleChrome/puppeteer)


## Estrutura de organização do projeto
* Estrutura de Pastas:
    - `/backstop_data` pasta do projeto onde ficam as engines da sua escolha para manipulação de browser via headless
    - `/engine_scripts` pasta onde ficam as engines utilizadas no projeto
    - `/chromy` pasta referente a engine do chromy
    - `/puppet` pasta referente a engine do puppeteer
    - `/bitmaps_reference` pasta onde ficam as screenshots das referências de testes previamente aprovadas
    - `/bitmaps_test` pasta onde ficam as screenshots de comparação
    - `/html_report` report em html de cada execução dos testes


## Configuração
* O arquivo backstop.json contém os cenários que serão validados. Dentro da sessão "scenarios" temos os "labels". Cada label é responsável por mapear o layout desejado e também possui a URL onde a automação deverá fazer a comparação e validação dos testes. Caso queira testar em outros endereços ou locamente é necessário fazer a alteração da url em todos os cenários no arquivo backstop.json.


## Principais comandos ##
Para capturar o layout atual como referência:

```shell
    backstop reference
```

Validação de layout, usando como comparativo a referência já capturada:

```shell
    backstop test
```

Caso queria que as novas alterações sejam aprovadas como referência use o comando: 

```shell
    backstop approve
```

Todos os comando acima podem ter o parâmetro --filter <label>, com isso filtramos aonde queremos fazer as alterações/referência ou podemos testar apenas um label desejado, exemplo:

```shell
    backstop test --filter Homepage_Campo_de_Busca
```

Após o BackstopJS fazer a comparação dos layouts é gerado uma página html com o relatório desse testes, que por padrão após o término do teste o navegador se encarrega de exibir o resultado de forma automática.

## bitmaps_reference ##
* Ao executar o comando "backstop reference" os layouts de referência serão guardados dentro desta pasta. E sempre que a referência é atualiza a imagem antiga é alterada pela nova.


## bitmaps_test ##
* A cada execução do teste através do comando "backstop test", as imagens são capturas e guardadas dentro desta pasta para comparação e usadas no relatório. Ou seja, essa pasta cresce de tamanho muito rapído pois a cada teste novas imagens são salvas nesse local. Devido a isso essa pasta não deve ser commitada e o as suas alterações estão sendo ignoradas pelo Git através do arquivo gitignore.


## html_report ##
* Pasta onde o relatório hmtl do último teste executado é guardado. Sempre que um novo teste é executado o relatório anterior é sustituído pelo novo. Nessa pasta também existe a configuração de como esse report é gerado.


## Ambientes de teste e desenvolvimento
* dev: ambiante.dev.de
* homolog: ambiente.hom.de


## Browsers testados
* Chrome

## Viewports testados
* Desktop
* Mobile
* Tablet


## Pre-requisitos para rodar os testes
* Instalar [NodeJS](http://nodejs.org/)


## Setup

* Instalar dependencias do projeto com o comando padrão npm

```shell
npm install
```