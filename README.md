# GoodMecano

This app works on **app/** folder and gulp build in **build/**.

## Installation

### Install NodeJs
Go to [NodeJS.org](http://NodeJS.org) for installation.

### Install Sass
Go to [sass-lang.com/install](http://sass-lang.com/install) for installation in command line.

### Install Gulp
We begin by installing Gulp in global mode with `-g`.

```
npm install -g gulp
```

To check if everything is installed and Gulp is active:

```
gulp -v
```

### Download the dependencies NPM

```
npm install
```

## Gulp Task

### Run project

```
gulp
```

### Clean project

```
gulp clean
```

### Build & Optimize

* Contact and Uglify
* CSSO

```
gulp --production
```

## Naming convention

```
.block {}
.another-block {}
.block--modifier {}
.block.is-state {}

.block__element {}
.block__another-element {}
```
