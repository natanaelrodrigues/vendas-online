## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## dicas

mudar o settings.json e incluir
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]

Começar as configurações
npm i --save @nestjs/config
verificar documentação. :> https://docs.nestjs.com/techniques/configuration

Instalar Conexão com banco
https://docs.nestjs.com/recipes/sql-typeorm
npm install --save typeorm pg @nestjs/typeorm

Para criar uma migration
npx typeorm migration:create ./src/migrations/create_table_user

Criar um module
nest g module user

Criar um controller
nest g controller user

Criar um service
nest g service user

Para criptografar a senha
npm i bcrypt
npm i -D @types/bcrypt

Criar cache de consulta, exemplo cidade e estado
npm i cache-manager

Criar classes de validação/DTO
npm i --save class-validator class-transformer

Instalação do jwt
npm install --save @nestjs/jwt

ultima aula: https://www.youtube.com/watch?v=k-snSGHfs4Q&list=PLedVhPP7RyiIOJ7R4lqXtWa4x-GX-x7rO&index=32
