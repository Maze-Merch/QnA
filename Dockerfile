FROM node:12.16.0
# Make a folder in your image where your app's source code can live
# RUN mkdir -p /src/app
# Tell your container where your app's source code will live
WORKDIR /code
# ENV PORT 80
COPY package.json /code/package.json
# Does your app have any dependencies that should be installed?
RUN npm install
# What source code do you what to copy, and where to put it?
COPY . /code
# What port will the container talk to the outside world with once created?
EXPOSE 3006
# How do you start your app?
CMD [ "node", "server/index.js" ]