# WebMotors
Projeto de desafio técnico para empresa WebMotors

Obejtivo de desenvolver Uma aplicação back-end com um CRUD de anuncioso

---

# Sumário

- [Como Executar](#Como-Executar)
- [Lista de Requisitos](#lista-de-requisitos)
- [Desenvolvimento](#Desenvolvimento)
- [Próximos passos](#Próximos-passos)
- [O que eu faria diferente](#O-que-eu-faria-diferente)

# Como Executar

  Este repositório pode ser clonado em seu computador e executado localmente, para isso siga os seguintes passos:

    1- Crie um diretório em seu computador;
    2- Enre no diretorio criado pelo terminal;
    3- Clone o repositório com o seguinte comando:
        git clone git@github.com:bruno-s-mendes/webmotors.git
    4- Entre no diretório do desafio pelo terminal, para isso rode o comando:
        cd webmotors;
    5- Instale as dependencias do back-end, para isso rode o comando:
        npm instal;
    6- É necessáro ter o MYSQL instalado e configurado em sua máquina.
        Dentro da pasta config, crie um arquivo config.json, com o seguinte conteudo:
    
        {
      "development": {
        "username": "",
        "password": "",
        "database": "teste_webmotors",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "test": {
        "username": "",
        "password": "",
        "database": "teste_webmotors",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "",
        "password": "",
        "database": "teste_webmotors",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    
    7 - Nos campos username coloque o seu username do banco de dados MYSQL e passord coloque a senha para o mesmo usuário;
    
    8- inicie a aplicação, para isso rode o comando:
        npm run dev;
        
    7-abra o navegador digite localhost:3000

    A aplicação deve abrir em seu navegador. Caso tenha alguma dúvida não hesite em me contatar no email: mendessbruno@gmail.com


# Lista de Requisitos:

### 1 - Adicionar um anuncio

Adicionar um anuncio em um banco de daos relacional;

### 2 - Restaurar lista de anuncios;

Restaurar todos os anuncios do banco de dados;

### 3 - Deletar um anuncio;

Deletar um anuncio do banco de dados;

### 4 - Editar um anuncio;

Editar um anuncio do banco de dados;

### 5 - Fazer um Front-end;

Desenvolver um front-end simples para listar, adicionar e editar anuncios


# Desenvolvimento 
  Para o desnvolvimento deste projeto, eu iniciaei a aplicação Back-end inicializando um banco de dados. Para utilizar o SQL com o nodeJs, eu utlizei o Sequelize, que é uma ferramenta que auxilia na consulta ao banco de dados.
  Após feita a inicialização do banco de dados, eu defini quais seriam os end-points da aplicação, que são os seguintes:
  
  GET "/" - renderiza a view;
  GET "/ads" - retorna um objeto JSON com a lista de anúncios cadastrados no banco;
  POST "/ads" - adiciona um anuncio no banco de dados;
  PUT "/ads/id" - realiza o update do anuncio com o id fornecido no banco de dados;
  DELETE "/ads/id" - realiza a remoção do anuncio com i id firnecido no banco de dados;
  
  Apos definidas as rotas e implementadas as lógicas eu desenvolvi a View com a ferramenta EJS, onde consigo adiiconar um anuncio, deletar um anuncio e listar todos os anuncios;
  
# Próximos passos
  O próximo passo é a implementação de uma maneira de realizar o update pela interface;;
  
# O que eu faria diferente
  Eu desenvolveria a aplicação front-end utilizando React ou outra ferramenta especifica de front-end, pois a renderizaçaõ como ejs ficou muito complexa, utilizando React, ficaria mais legivel o código e seria mais fácil de realizar a implementação de todas as funcuonalidades;
