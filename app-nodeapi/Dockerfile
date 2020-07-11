
#NODE 
FROM node:10.15.1
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json /usr/src/app/
RUN npm install
COPY . .
EXPOSE 3000
CMD nodemon ./appnode/index.js
