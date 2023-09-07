# Projeto de API Backend usando Express

## Para executar o projeto deve-se: 
### Criar um arquivo .env na raiz do projeto backend e colocar as seguintes variáveis de ambiente
PORT_SERVER = 8081 

DB_HOST = localhost
DB_PORT = 3306
DB_USER = 
DB_PASS = 
DB_DATABASE = shopper_test

### Executar o comando abaixo no terminal na pasta do projeto onde encontra-se o package.json:
yarn && yarn start


### Setar no arquivo swagger.json que está dentro de src a porta que foi setada no .env
### Por fim, acessar no navegador a rota /docs para visualizar o swagger da aplicação


# Projeto de Frontend usando React

## Para executar o projeto
### Criar um arquivo .env na raiz do projeto frontend e colocar as seguintes variáveis de ambiente
REACT_APP_BASE_URL_API=http://localhost:8081
REACT_APP_TIMEOUT_API=30000

### Executar o comando abaixo no terminal na pasta do projeto onde encontra-se o package.json:
yarn && yarn start