Babel, React, ES 2015
====================
 - Install babel-cli and webpack as global module ( locally it does not work for me! ) 
 - If you the modules are exported with legacy export syntax then import also needs to be the legacy way
 - However, if the modules are exported using the ES 2015 syntax, the import also needs to follow the ES 2015 syntax

In package.json the 'scripts' key will have values as below.

"scripts": {

	"2js": "babel --presets react,es2015 src --out-dir buildReact",
    
    "pack": "webpack buildReact/index.js build/bundle.js",
	
	"test": "echo \"Error: no test specified\" && exit 1"
}

 
 - To compile the modules and React Components to ES5(legacy) .js file, run : npm run 2js
 - To budle everything up with Webpack, run : npm run pack

This works for me today.
 Thi