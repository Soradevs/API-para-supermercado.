# API de Gerenciamento de Produtos

**Esta API permite gerenciar produtos em um supermercado com os seguintes endpoints:**

## Endpoints

**Listar Produtos**
**Método: `GET /produtos`  
Descrição: Lista produtos com suporte a paginação e filtragem por nome.**

**Buscar Produto por ID**
**Método: `GET /produtos/:id`  
Descrição: Obtém detalhes de um produto pelo ID.**

**Adicionar Novo Produto**
**Método: `POST /produtos`  
Descrição: Adiciona um novo produto.  
Corpo: `nome`, `preco`, `marca`**

**Atualizar Produto Existente**
**Método: `PUT /produtos/:id`  
Descrição: Atualiza um produto existente.  
Corpo: Campos opcionais `nome`, `preco`, `marca`**

**Remover Produto**
**Método: `DELETE /produtos/:id`  
Descrição: Remove um produto pelo ID.**

## Erros

**404 Not Found : Produto não encontrado.** 
**400 Bad Request: Dados de entrada inválidos.**
##
![](https://cdn-icons-png.flaticon.com/512/2164/2164832.png)
##
