# syntax=docker/dockerfile:1
FROM node:18

WORKDIR /mv-passeios-pwa

COPY package*.json ./

RUN npm i -g npm@8 @quasar/cli && npm i

COPY . .

EXPOSE 8080
