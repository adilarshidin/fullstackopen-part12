FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV NODE_ENV=production

RUN npm ci --omit=dev
CMD npm start
