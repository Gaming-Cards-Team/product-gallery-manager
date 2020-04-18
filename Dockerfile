FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY src/main src/main
COPY swaggwer.yml ./
RUN npm run build
RUN rm -R src/

CMD [ "npm", "run", "serve" ] 