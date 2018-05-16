#!/usr/bin/env bash

echo "Cleaning images..."

docker kill `docker ps -qa`
#docker rm -f $(docker ps -aq)
#docker rmi -f $(docker images -aq)

docker network rm net

echo "Repository login..."

echo "Creating network..."
docker network create --driver bridge net

echo "Running compose..."
docker-compose -f docker-compose.yml up &

echo "Done!"
exit 0

