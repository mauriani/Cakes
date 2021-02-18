### Cakes

### Projeto

Essa aplicação foi desenvolvida no bonus do curso GoStack/Bootcamp da **Rocketseat.** O intuito desse módulo foi entender o que é redux e como usar, usei essa aplicação para força o conhecimento sobre redux, o layout foi montado por mim.

### Iniciando a Aplicação

```
$ git clone <https://github.com/mauriani/RocketShoes-Web>
```

- Depois disso acesse a pasta de cada do projeto e instale a dependências com o seguinte comando abaixo

```
$ yarn install # ou npm install
```

- Para dá start na aplicação precisamos deixar a api rodando juntamente com o nosso react.

```
npx json-server server.json -p 3232
yarn start
```

### API

Para fazermos o processo de manipulação de uma api usamos **JsonServer**. Para usar no projeto precisamos criar um arquivo chamado server.json e ao dá start na aplicação a api tem que está rodando também.

Adicionando a biblioteca

```
yarn global add json-server

```

Start

```
npx json-server server.json -p 3333

```

### Tecnologias utilizadas

- [x]  React Js
- [x]  Redux
- [x]  Redux Saga
- [x]  Json Server
- [x]  Reactotron

## O que é o Redux?

- O Redux é uma biblioteca para gerenciamento de estado que segue os princípios da arquitetura flux.
- Redux é um container de estado previsível para aplicações JavaScript.

### **Configuração**

Em nossa aplicação vamos utilizar o redux para controlar todo o processo de adicionar um item ao carrinho, contabilizar quantos itens vamos ter, e até mesmo o total. Quando instalamos o redux vamos disparar um action e ela será responsável por fazer todo os processo. A configuração do processo está descrito abaixo.

### Instalando o Redux

Vamos instalar o redux e pacote de interação entre react e redux.

```
yarn add redux react-redux

```
