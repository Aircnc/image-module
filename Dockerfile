# What image do you want to start building on?
FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app

# Tell your container where your app's source code will live
WORKDIR /src/app

# What source code do you what to copy, and where to put it?
COPY . /src/app

# Does your app have any dependencies that should be installed?
RUN npm install

RUN npm run seed

RUN npm run react-dev 

# RUN chmod +x ./wait-for

# RUN sh -c ./wait-for mongodb://database:27017

# What port will the container talk to the outside world with once created?
EXPOSE 3003
# How do you start your app?

CMD ["npm", "start"]

# CMD [ "sh", "-c", "./wait-for", "database:27017", "--", "npm", "run", "seed","--", "npm", "start"]

# CMD ["./wait-for", "database:27017", "--", "npm", "start"]