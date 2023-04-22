FROM node:18

WORKDIR /root/app

COPY package.json .
COPY server/package.json ./server

RUN yarn install-all

COPY . .
RUN yarn build
EXPOSE 3173
EXPOSE 3000

ENTRYPOINT [ "yarn", "prod" ]



# FROM johnpapa/angular-cli as client-app
# LABEL authors="John Papa"
# WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# RUN npm install --silent
# COPY . .
# RUN ng build --prod

# # Node server
# FROM node:12-alpine as node-server
# WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY server.js .
# COPY /server /usr/src/app/server

# # Final image
# FROM node:12-alpine
# WORKDIR /usr/src/app
# COPY --from=node-server /usr/src /usr/src
# COPY --from=client-app /usr/src/app/dist ./
# EXPOSE 3000
# # CMD ["node", "server.js"]
# CMD ["npm", "start"]
