FROM node:16


# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

# app source
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]