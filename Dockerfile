FROM node:14.16.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

# Install only for production
RUN npm install --only=production

# Bundle app source
COPY . .

# build the react client

EXPOSE 4040

CMD [ "npm", "start" ]
