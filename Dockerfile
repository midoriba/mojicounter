FROM node:21-slim
WORKDIR /app
COPY ./package*.json /app
RUN npm install