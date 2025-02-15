<p align="center"> <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a> <a href="https://www.typescriptlang.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="120" alt="TypeScript Logo" /></a> <a href="https://www.prisma.io/" target="blank"><img src="https://prismalens.vercel.app/header-logo.svg" width="120" alt="Prisma Logo" /></a> <a href="https://www.postgresql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" width="120" alt="PostgreSQL Logo" /></a> </p><p align="center"> Um projeto de <strong>Gerenciamento de Tarefas (To-Do List)</strong> desenvolvido com: </p><p align="center"> <a href="http://nestjs.com/" target="_blank">NestJS</a> (framework Node.js), <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, <a href="https://www.prisma.io/" target="_blank">Prisma</a> (ORM), e <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> (banco de dados). </p><p align="center"> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a> <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a> <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-v4.9.5-blue.svg" alt="TypeScript Version" /></a> <a href="https://www.prisma.io/" target="_blank"><img src="https://img.shields.io/badge/Prisma-v5.0.0-blue.svg" alt="Prisma Version" /></a> <a href="https://www.postgresql.org/" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-v15.0-blue.svg" alt="PostgreSQL Version" /></a> </p>


## Descrição do Projeto

Este é um projeto de Gerenciamento de Tarefas (To-Do List) desenvolvido com as seguintes tecnologias:

NestJS: Um framework Node.js para construir aplicações server-side escaláveis e eficientes.

Prisma: Um ORM moderno para Node.js e TypeScript, que facilita a interação com o banco de dados.

PostgreSQL: Um banco de dados relacional robusto e de código aberto.

TypeScript: Uma linguagem que adiciona tipagem estática ao JavaScript, melhorando a qualidade e a manutenibilidade do código.

O projeto permite criar, listar, atualizar e excluir tarefas, sendo uma excelente base para aprender e praticar o desenvolvimento de APIs com NestJS e Prisma.

## Como Executar o Projeto

Pré-requisitos

Node.js (v16 ou superior)

PostgreSQL instalado e configurado

VSCode ou outro editor de sua preferência

## Passos para Configuração

Clone o repositório (se aplicável):

```bash
git clone https://github.com/seu-usuario/task-management.git
cd task-management
```

## Instale as dependências:

```bash
npm install
```

## Configure o banco de dados:

Crie um banco de dados no PostgreSQL chamado task_management.

Atualize o arquivo .env com as credenciais do seu banco de dados:

env
Copy
DATABASE_URL="postgresql://SEU_USUARIO:SUA_SENHA@localhost:5432/task_management?schema=public"
Execute as migrações do Prisma:

```bash
npx prisma migrate dev --name init
```

## Gere o Prisma Client:

```bash
npx prisma generate
```

## Inicie o servidor:

```bash
npm run start:dev
```

O servidor estará disponível em http://localhost:3000.

## Rotas da API

A API possui as seguintes rotas:

GET /tasks: Lista todas as tarefas.

GET /tasks/:id : Obtém uma tarefa pelo ID.

POST /tasks: Cria uma nova tarefa.

PUT /tasks/:id : Atualiza uma tarefa existente.

DELETE /tasks/:id : Exclui uma tarefa.

## Exemplo de Uso no Postman

### Criar uma tarefa:

Método: POST

URL: http://localhost:3000/tasks

Body (JSON):

```json
{
  "title": "Fazer compras",
  "content": "Comprar pão, leite e ovos"
}
```

### Listar todas as tarefas:

Método: GET

URL: http://localhost:3000/tasks

### Atualizar uma tarefa:

Método: PUT

URL: http://localhost:3000/tasks/1

Body (JSON):

```json
{
  "title": "Fazer compras atualizado",
  "completed": true
}
```

### Excluir uma tarefa:

Método: DELETE

URL: http://localhost:3000/tasks/1

## Testes

Para executar os testes, utilize os seguintes comandos:

Testes unitários:

```bash
npm run test
```

Testes de integração (e2e):

```bash
npm run test:e2e
```

Cobertura de testes:

```bash
npm run test:cov
```

## Ferramentas Utilizadas

Prettier: Para formatação automática do código.

ESLint: Para análise estática do código e boas práticas.

Postman: Para testar as rotas da API.
