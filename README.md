# React Project Template

This repository is a simple project template for a React website. I created it
because I find Create React App too bloated and hard to configure. I’m slowly
updating this repository to fit my needs, and if they are also your needs, feel
free to clone or fork, and make use of it.

These are the dependencies:

* React and React DOM
* React Feather
* React Router Dom

For development, this template contains:

* Babel, with `preset-env` and `preset-react`
* `babel-plugin-react-scoped-css` to generate CSS modules
* ESLint with React configuration
* Sass and `sass-loader`, so you can write local style files with SASS
* `terser-webpack-plugin` to minify output code
* `webpack-bundle-analyzer`
* `webpack-dev-server`

## To create production version

To generate production version, simply run:

```
npm run build

```

It will create the following files in `dist/`:

```
.
├── index.html
├── main.css
├── main.js
├── runtime.js
├── vendors.js
└── vendors.js.LICENSE.txt

```
## To run development version in local server

```
npm run serve

```
It will create a live server instance in `localhost:9000`

<hr />

In the future, I intend to fork this rep to configure typescript.
