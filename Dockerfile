FROM node:8.9.3-alpine

# Set a working directory
WORKDIR /usr/src/app

RUN npm install pm2 typescript -g


#for production
#CMD ["pm2-runtime", "dist/server.js"]

#for development
#CMD ["npm", "run", "dev"]