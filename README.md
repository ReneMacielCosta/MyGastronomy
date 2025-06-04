# 🍽️ MyGastronomy - API de Restaurante

**MyGastronomy** é um aplicativo web que disponibiliza uma **API RESTful** para gerenciamento de um restaurante, permitindo aos usuários consultar o menu e verificar a disponibilidade dos pratos em tempo real.

---

## 📌 Funcionalidades

- 🔍 Visualização do cardápio completo (entradas, pratos principais, sobremesas, bebidas)
- ✅ Indicação de disponibilidade de cada prato
- 📦 Cadastro de pratos (admin)
- ✏️ Atualização de informações (preço, descrição, disponibilidade)
- ❌ Remoção de pratos (admin)
- 🔐 Autenticação de usuários (login e registro)
- 🧾 Gestão de pedidos (opcional/extensível)

---

## 🧱 Tecnologias Utilizadas

- **Back-end:** Node.js, Express.js
- **Banco de Dados:** MongoDB (com Mongoose/MongoClient)
- **Autenticação:** JSON Web Token (JWT)
- **Ambiente:** Dotenv, Nodemon
- **Outros:** CORS, REST API, arquitetura MVC

---

## 🔧 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/mygastronomy.git
cd mygastronomy/backend
npm run dev
