FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]