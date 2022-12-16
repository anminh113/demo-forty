FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json ./

RUN rm -fr node_modules
RUN rm -fr dist
RUN npm install
COPY tsconfig.json ./

COPY src ./src
COPY .env ./

COPY . /usr/src/app
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start:dev"]