FROM node:alpine

WORKDIR /usr/app

COPY ./package*.json .

RUN npm i --production

COPY . .

EXPOSE 3000

USER node

CMD ["npm", "start"]