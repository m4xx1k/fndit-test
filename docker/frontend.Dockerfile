
FROM node:18-alpine

WORKDIR /app

COPY ../frontend/package.json .

RUN npm install --legacy-peer-deps

RUN npm i -g serve

COPY ../frontend .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]