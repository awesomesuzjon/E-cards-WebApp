# install dependencies
FROM node:16-alpine as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

# Copy all local files into the image.
COPY . .
RUN npm run build

FROM node:alpine-lts
WORKDIR /svelte
COPY --from=builder /app/.svelte-kit .svelte-kit
COPY --from=builder /app/static static

EXPOSE 3000
CMD ["npm", "run", "preview"]