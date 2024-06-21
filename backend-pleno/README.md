# Teste Técnico - Desenvolvedor Backend Pleno

### Instruções.
  Bem-vindos a uma simulação de API para um e-commerce. Nela será possível adicionar, remover, listar e editar os **Produtos** que fazem parte de uma ou mais **Categorias**, bem como adicionar os produtos ao carrinho de compras e posteriormente realizar o checkout.
  Busquei dar um foco maior na arquitetura e na escrita de um código limpo e legível, utilizando a maioria das boas práticas possíveis. Confesso que minha vontade era aprofundar em algumas validações e regras de negócio que compoem um e-commerce, porem vi que iria me extender demais no Teste. 
  
  Sendo assim, abaixo está descrito todos os passos iniciais e qual arquitetura foi usada e alguns motivos que levaram a escolha.


### Primeiros passos.

Não tem muito mistério para realizar o setup inicial do projeto, siga essas pequenas etapas e estará pronto para os testes da API

1. Após clonar o repositório instale as dependencies:
> [!IMPORTANT]
> Fique Atento as versões do node e npm que foram usadas.
> - node: 20.12.2
> - npm: 10.5.0

```
npm install
```

2. Configure a URI do banco de dados postgreSQL no .env da aplicação
```
DATABASE_URL=postgresql://[USUÁRIO]:[SENHA]@[URL]:[PORTA]/[NOME_TABELA]?schema=public
DATABASE_URL_WITH_SCHEMA=${DATABASE_URL}?schema=public
```

2. Execute a migração inicial do banco:
 Esse comando vai garantir que todas as entidades mapeadas no prisma/schema sejam replicadas no banco de dados PostgreSQL

```
npx prisma migrate dev
```

3. Inicie o servidor local:

```
npm start
```

## Tecnologias Utilizadas

 Para esse projeto foi utilizado nodeJS com Express para criação do servidor e principalmente para estruturar toda s API, definindo os endpoints necessários e manipulação das requisições e respostas.
  - nodeJS
  - Express

  No que diz respeito a dados, foi optado em utilizar o ORM Prisma, uma ótima e poderosa biblioteca que comporta diversas manipulações com o banco de dados com uma semantica clara e recursos facilitados.
   - Prisma

## Arquitetura

 Nesse fundamental pilar quando se trata em desenvolver aplicações que possam escalar facilmente, e a manutenção na sua estrutura a longo prazo ser saudável e de fácil compreenssão, optei em utilizar a arquitetura SOLID.
Além de ajudar muito quando se usa POO, possibilita desenvolver a aplicação de forma modular, assim garantindo uma evolução para a arquitetura de microserviços, se for necessário, bem como a fácil adaptação de outros ORMs e afins sem interferir na regra de negócio do produto.

 Para casar ainda mais, e deixar a estrutura do projeto fácil de manusear, apliquei princípios de Design Patters na estruturação dos arquivos e pastas, conhecida como Package by Feature. Assim cada diretório dentro da minha API é responsável por representar um "Caso de Uso", ou seja, nossas regras de negócio que fazem o produto entregar o valor necessário.

## Observações

 Alguns dos padrôes de desenvolvimento essenciais para uma evolução saudável de produto são os testes automatizados e a documentação da API. Infelizmente acabei não tendo tempo hábil pra implementa-las no projeto, porem darei segmento nesses e outros avanços por conta, mas para garantir a entrega do teste no período combinado, isso ficou para a sequência.

 Para facilitar os testes do projeto, enviarei em anexo por email ao RH o arquivo do postman, com todas as rotas mapeadas, formato dos objetos utilizados para cada endpoint, etc.