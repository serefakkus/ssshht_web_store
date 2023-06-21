FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM ubuntu:16.04
RUN apt-get update
RUN sudo apt install nginx-extras
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ssshht_web_store /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
