Babel, React, ES 2015
====================

In package.json the 'scripts' key will have values as below.

"scripts": {
	"2js": "babel --presets react,es2015 src --out-dir buildReact",
    "pack": "webpack buildReact/index.js build/bundle.js",
	"test": "echo \"Error: no test specified\" && exit 1"
}

 - Install babel-cli and webpack as global module ( locally it does not work for me! ) 
 - To compile the modules and React Components to ES5(legacy) .js file, run : npm run 2js
 - To budle everything up with Webpack, run : npm run pack

This works for me today.