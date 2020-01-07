FROM node:8.9.3-alpine

# Set a working directory
WORKDIR /usr/src/app

RUN npm install pm2 typescript -g

# Only copy the package.json file to work directory
COPY package.json .
# Install all Packages
RUN npm install

#for production
#CMD ["pm2-runtime", "dist/server.js"]

#for development
CMD ["npm", "run", "dev"]