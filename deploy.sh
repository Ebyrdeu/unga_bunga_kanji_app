#!/bin/bash

echo "Puling from git"
git pull

echo "Building app"
docker-compose up -d --build