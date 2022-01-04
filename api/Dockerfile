FROM node:alpine

WORKDIR /usr/app

COPY ./package*.json .

RUN npm i --production

COPY . .

EXPOSE 5000

USER node

CMD ["npm", "start"]