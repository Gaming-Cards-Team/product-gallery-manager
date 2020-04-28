FROM node:10

ENV STAR_WARS_REST_API_URL='https://swdestinydb.com/api/public/'
ENV PORT=8080

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY src/ src/
COPY swagger.yml ./
COPY babel.config.js ./
RUN npm run build
RUN rm -R src/

CMD [ "npm", "run", "serve" ] 