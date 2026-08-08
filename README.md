# 📝 Gerador de Texto

Um gerador de textos desenvolvido com **React.js**, **Vite**, **Axios** e **CSS3**, permitindo gerar diferentes tipos de textos utilizando APIs externas.

O projeto foi desenvolvido com o objetivo de praticar consumo de APIs, gerenciamento de estados com React e criação de uma interface simples e responsiva.

## 🚀 Funcionalidades

* ✨ Geração de **Hipster Ipsum**
* 🥓 Geração de **Bacon Ipsum**
* 💬 Geração de frases utilizando **DummyJSON**
* 🔢 Escolha da quantidade de textos/parágrafos
* 📋 Botão para copiar o resultado para a área de transferência
* ✅ Feedback visual após copiar o texto
* 🔄 O botão retorna para "Copiar" ao gerar um novo texto
* 📱 Interface responsiva

## 🛠️ Tecnologias utilizadas

* **React.js** — construção da interface e gerenciamento de estados
* **Vite** — ambiente de desenvolvimento e build
* **Axios** — consumo das APIs
* **CSS3** — estilização e responsividade
* **JavaScript** — lógica da aplicação

## 🌐 APIs utilizadas

### Hipster Ipsum

Utilizada para gerar textos no estilo Hipster Ipsum.

```text
https://hipsum.co/api/
```

### Bacon Ipsum

Utilizada para gerar textos no estilo Bacon Ipsum.

```text
https://baconipsum.com/api/
```

### DummyJSON

Utilizada para obter frases aleatórias.

```text
https://dummyjson.com/quotes
```

## 📦 Instalação

Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação, normalmente:

```text
http://localhost:5173
```

## 📂 Estrutura principal

```text
src/
├── assets/
│   └── icon-Tannus.png
├── App.jsx
├── index.css
└── main.jsx
```

## 🧠 O que foi praticado

Durante o desenvolvimento deste projeto foram utilizados conceitos como:

* `useState` para gerenciamento de estados;
* Eventos do React, como `onChange` e `onClick`;
* Consumo de APIs REST com Axios;
* Utilização de parâmetros dinâmicos nas URLs das APIs;
* Manipulação de arrays com `map()` e `join()`;
* Renderização condicional;
* Clipboard API para copiar conteúdo;
* Criação de componentes e elementos interativos;
* CSS responsivo com media queries.

## 📋 Como funciona

1. O usuário escolhe o tipo de gerador.
2. Define a quantidade de textos/parágrafos.
3. Clica em **Gerar Texto**.
4. O React realiza uma requisição para a API correspondente.
5. O resultado é exibido na tela.
6. O usuário pode clicar em **Copiar** para enviar o texto para a área de transferência.
7. Após a cópia, é exibida uma mensagem de confirmação.

## 🎯 Objetivo do projeto

Este projeto faz parte dos estudos de desenvolvimento web e tem como principal objetivo praticar **React.js, consumo de APIs e manipulação de estados**, criando uma aplicação pequena e funcional.

## 👩‍💻 Autora

**Alinne Tannus**

Projeto desenvolvido para fins de estudo e portfólio.
