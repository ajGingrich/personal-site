FROM node:14.16.0
ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# TODO: change to yarn
COPY ["package.json", "./"]

# Install only for production
RUN npm install

# copy app source
COPY . .

# build the react client

EXPOSE 4040

CMD [ "npm", "start" ]
