FROM node:20 AS test-stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci
RUN npm test

FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY --from=test-stage /usr/src/app/ /usr/src/app

RUN npm ci
RUN npm run build

FROM nginx

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
