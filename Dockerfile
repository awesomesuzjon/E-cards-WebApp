# install dependencies
FROM node:16.15.1-slim as builder
WORKDIR /app
RUN npm i -g npm
COPY package.json .
COPY package-lock.json .
RUN npm ci
# Copy all local files into the image.
COPY . .
RUN npm run build

FROM node:lts-alpine
WORKDIR /svelte
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/package-lock.json package-lock.json
COPY --from=builder /app/build build
COPY --from=builder /app/.svelte-kit .svelte-kit
CMD ["npm", "run", "start"]
