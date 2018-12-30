#!/usr/bin/env bash

## Script to install dependencies on an Ubuntu system. For personal use ONLY

apt install curl vim -y
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt install nodejs
npm i -g tplink-lightbulb

apt install postgresql pgadmin3 -y
export DATABASE_URL='postgresql://localhost:5432/olympus'
pgadmin3
