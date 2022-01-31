FROM node:14 AS PROD

ENV NODE_ENV production
WORKDIR /opt/src

COPY package.json .
COPY package-lock.json .
COPY .npmrc .
  
RUN npm ci --production

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
