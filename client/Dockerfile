FROM node:18-alpine

WORKDIR /task-client

COPY package*.json /task-client/

RUN npm install

COPY . /task-client/

RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "dev" ]