FROM node:14.16.0
ENV NODE_ENV=production

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies for production
COPY ["package.json", "./"]
RUN npm install --only=production

# copy app source
COPY . .

EXPOSE 4040

# build the react client
CMD [ "npm", "start" ]
