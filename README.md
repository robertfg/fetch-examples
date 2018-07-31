# Fetch Examples

Project:  This project is just a means to explore AJAX and fetch.
          This also includes examples of how to call functions on page load w/o jQuery.
Author:   Robert Glover
Date:     2018-07-30

## Build Process

1.  mkdir fetch-examples
2.  cd routing-examples
3.  git init
4.  npm init -y
5.  Create folders:
    - src
    - public
6.  Add src/server.js:
    - simple web server
7.  Modify package.json:
    - main: src/server.js
    - start: node src/server.js
8.  Run with npm start (nodemon)

### Note that there is no need to install Node or Express as they have been installed globally.
### Although, if I were going to distribute the App, I would need to install Express locally.

## Git Update Process
1.  Create repo on GitHub.
2.  Add .gitignore file with node_modules
3.  git add .
4.  git commit -a -m "Routing examples"
5.  git remote add origin https://github.com/robertfg/fetch-examples.git
6.  git push --set-upstream origin master
