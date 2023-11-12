# Use a imagem oficial do Node.js como base, com a versão desejada (por exemplo, 14)
FROM node:20

# Crie um diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código-fonte da aplicação para o diretório de trabalho
COPY . .

# Transpile o código TypeScript para JavaScript
RUN npm run build

# Expõe a porta 4200, que é a porta na qual o servidor GraphQL irá rodar
EXPOSE 4200

# Comando para iniciar a aplicação
CMD ["npm", "start"]