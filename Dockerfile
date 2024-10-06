FROM node:20-alpine

WORKDIR /app

COPY dist/ /app/dist

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]