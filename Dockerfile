# Stage 1: Build the React app
FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Setup the production environment
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY --from=build /app/build ./build
COPY --from=build /app/server ./server

EXPOSE 3001

CMD ["npm", "start"]
