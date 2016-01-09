FROM mhart/alpine-node
MAINTAINER Mike Williamson <mike@korora.ca>

WORKDIR /
ADD . /pacgeo
WORKDIR /pacgeo
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
