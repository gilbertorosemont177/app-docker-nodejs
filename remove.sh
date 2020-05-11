#!/bin/bash
docker network rm dbproject
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)

docker rmi -f nodeimage
docker rmi -f mysqlimage