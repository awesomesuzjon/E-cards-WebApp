FROM node:16-alpine

# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
# RUN npm ci

# Copy all local files into the image.
COPY . .

RUN npm run dev 

###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
EXPOSE 3000
CMD ["node", "./dev"]