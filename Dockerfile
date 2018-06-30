FROM alpine:latest
RUN apk add --update nodejs
RUN mkdir -p /usr/src/app/client
COPY ./package.json /usr/src/app
COPY ./package-lock.json /usr/src/app
COPY ./client/package.json /usr/src/app/client
COPY ./client/package-lock.json /usr/src/app/client
ENV ENVIRONMENT dev-server
WORKDIR /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN npm run build
RUN chmod +x /usr/src/app/entrypoint.sh
EXPOSE 5000
CMD ["/usr/src/app/entrypoint.sh"]
