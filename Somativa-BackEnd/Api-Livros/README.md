# Mange Book API

API REST em Node.js, Express e MongoDB para gerenciar livros (Somativa DESB).

## Tecnologias

- Node.js
- Express
- MongoDB + Mongoose
- Dotenv
- Insomnia (para testes)

## Como rodar

1. Instale as dependências:

```bash
npm install
```

2. Copie o arquivo `.env` de exemplo:

```bash
cp .env.example .env
```

3. Ajuste a variável `MONGO_URI` se necessário.

4. Inicie o servidor em modo desenvolvimento:

```bash
npm run dev
```

O servidor subirá em `http://localhost:3000`.

## Rotas principais (todas com prefixo `/api`)

- `POST /api/books` – cria um livro
- `GET /api/books` – lista todos os livros
- `GET /api/books/search?title=algo` – busca por parte do título
- `DELETE /api/books/:isbn` – remove um livro pelo ISBN
