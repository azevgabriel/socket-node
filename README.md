# Sockets-Node

> Deve ser desenvolvida uma aplicação que faça uso de sockets. 

### Componentes mínimos:

- [x] Conexão com banco de dados.
- [x] Sockets TCP.
- [ ] Sockets UDP.
- [x] Ser uma aplicação de uso real.

### 💻 Pré-requisitos:

Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente do Node.js e Yarn.
* Se você configurou o `ormconfig.json`.

Crie `ormconfig.json` na raiz do projeto (perto do `package.json`), seguindo o exemplo abaixo:

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "example",
  "password": "example",
  "database": "example"
}
```