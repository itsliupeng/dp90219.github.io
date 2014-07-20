---
layout: post
title: Use octopress to build blog in github
---

## install git
```sh
sudo apt-get install git
```

## install rvm && ruby

```sh
curl -L https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
rvm install 2.1.2
rvm use 2.1.2 --default
ruby -v
```

## Setup Octopress
```sh
git clone git://github.com/imathis/octopress.git octopress
cd octopress
bundle install
```
### install default theme
```sh
rake install
```

## With Github User/Organization pages
Create a new Github repository and name the repository with the format username.github.io, where username is your GitHub
user name or organization name

```sh
rake setup_github_pages
rake generate
rake deploy
```



