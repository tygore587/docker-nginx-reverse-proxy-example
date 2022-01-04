# NGINX Docker Reverse-Proxy example

This is a small example to run an express app behind an nginx server.

## Nginx
The configuration of nginx is so all traffic which goes to port 80 will be routed to port 3000 on the local network.

## App
The app runs on port 3000 in the same network as nginx, so nginx has access to it, but you can't connect to it from the outside.

## Api
The api runs on port 5000 and listens to /api. So if you go to `localhost/api` you will redirected to the api itself.

## How to run
1. Run `docker-compose up`, it will build and start up the express and nginx container
2. Go to localhost and you should get an hello world.
