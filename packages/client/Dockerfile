FROM node:12-alpine AS build

COPY ["package.json", "yarn.lock", ".eslintrc.js", ".prettierrc.js", ".eslintignore", "./"]
COPY ["webapp/", "./webapp"]

WORKDIR /webapp

RUN yarn &&\
  yarn build:webapp

RUN rm -rf /node_modules

FROM node:12-alpine
COPY --from=build / /

WORKDIR /webapp/client

RUN yarn install --production

ENTRYPOINT [ "node", "server.js" ]