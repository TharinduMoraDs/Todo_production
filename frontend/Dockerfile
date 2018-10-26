FROM node:latest

WORKDIR ./

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8010

CMD ["npm","run dev"]
