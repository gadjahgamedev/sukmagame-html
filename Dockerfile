FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN yarn install

COPY . /usr/src/app

CMD yarn prod