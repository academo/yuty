Gulp Boilerplate
================
**Less + HTML5 + Sprites + Livereload**

This is a Gulp boilertplate which has settings to work with Less, Sprites and Livereload in a base directory structure

Gettings started
----

Clone de repository
```
git clone git@github.com:academo/gulp-boilerplate.git
```
Install global gulp (if you don't have it already)
```
sudo npm install -g gulp
```
Install nodejs dependences
```
npm install
```
Run Gulp
```
gulp
```

File structure
---

```
gulp-boilerplate
|   .bowerrc
|   .gitignore
|   bower.json
|   Gulpfile.js
|   package.jsno
|   README.md
|
+---app
|   |   index.html
|   |
|   +---js
|   |       main.js
|   |
|   +---css
|   |       main.css
|   |   +---less
|   |   |       main.less
|   |   |       sprite.less
|   |   |
|   |
|   +---img
|   |   +--- ico
|   |   |
```

Less
---
The main less file is main.less and less folder is the include directory. main.less is recompiled everytime a less file is modified.

Sprites
---
Once node-canvas is installed you can start dropping your images into img/ico folder and the sprite will be generated everytime you drop a new image or modify an existing one. More details: https://github.com/aslansky/gulp-sprite

Livereload
----
Livereload works for javascript, html and less files. You need to install the livereload plugin in your browser in order to make it work

Static Server
----
Once you run the gulp proccess a connect static http server runs over port 9000, It serves files from the "app" folder

Tasks
---
Included gulp tasks

**styles**

It compiles the main.less file and execute livereload for css

**connnect**

It runs a static connect server over port 9000 for app directory

**sprites**

It generate the sprite image from the ico folder

**scripts**

It executes livereload for javascript files

**views**

It executes livereload for html files

**default**

It starts livereload server, watch for less, js, html and img changes

NOTES
---
You need to install node-canvas in order to make sprites work



Ubuntu install

https://github.com/LearnBoost/node-canvas/wiki/Installation---Ubuntu

OSX install

https://github.com/LearnBoost/node-canvas/wiki/Installation---OSX