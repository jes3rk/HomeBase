#!/usr/bin/env bash

## Script to install dependencies on an Ubuntu system. For personal use ONLY

apt install curl -y
curl -sL https://deb.nodesource.com/setup_8.x | bash -
apt install nodejs
npm i -g tplink-lightbulb
