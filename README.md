# Desafio - CRUD de Cadastro de Usuários

## Tecnologias utilizadas

<div style="display: inline block">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width="50px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width="50px" />
</div>

## Sobre o projeto

Projeto de software desenvolvido para gerenciar o cadastro de usuários. O sistema utiliza operaçoes básicas do CRUD (Create, Read, Update, Delete).

## Funcionalidades

### Cadastro de Usuários (Create)

Permite adicionar novos usuários, informando nome, e-mail e categoria (Cliente ou Corretor de Seguro);

### Visualização de Usuários (Read)

Permite a visualização da lista de usuários criados.

### Atualização de Usuários (Update)

Permite realizar a edição das informações de usuário, clicando no botão de "Editar".

### Excluir Usuários (Delete)

Permite excluir os usuários que não são mais necessários.

## Pré-requisitos

Antes de iniciar, certifique-se de ter `node.js` e `npm` instalados em sua máquina.

## Como executar o projeto

1. Acesse `https://github.com/barbarabarbabela/cadastro-usuarios.git` e clone o repositório do GitHub:

```
git clone https://github.com/barbarabarbabela/cadastro-usuarios.git
```

2. Acesse o terminal e instale as dependências do projeto:

```
cd cadastro-usuarios
npm install
```

3. Inicie a aplicação:

```
npm start
```

4. Acesse a aplicação no navegador, pelo endereço `http://localhost:3000`.

## Decisões do projeto

- Optei por utilizar React, por ser uma tecnologia de fácil utilização para a criação de interfaces de usuário. Além disso, possuo mais familiaridade com esse framework/biblioteca.
- Decidi não utilizar frameworks CSS, porque optei por focar em construir uma aplicação funcional. É possível, futuramente, utilizar Styled Components ou Bootstrap, por exemplo, para uma maior organização dos arquivos.
- Optei por persistir os dados no local storage.
- Optei por criar uma aplicação estritamente Web, devido ao contexto apresentado.
- Não ficou claro, para mim, quais informações - além da categoria - deveriam constar nos dados do usuário. Dessa forma, decidi trabalhar com os dados: nome, categoria e e-mail.
- Como o projeto não possui um design pré-definido, optei por criar um design próprio.
