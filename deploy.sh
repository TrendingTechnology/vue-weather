#!/usr/bin/bash

# abort on errors
set -e

# build
sudo yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:rk4bir/vue-weather.git master:gh-pages

cd -