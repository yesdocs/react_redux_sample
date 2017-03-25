# react redux sample
A simple react app using redux and immutable.js

The app is being hosted on Azure [react redux sample](http://webappsampleredux.azurewebsites.net/).

## code structure
The code is structured in the following manner...
```powershell
# default.html & default.js & default.css are all that is needed to run the site, default.js is a generated file
/WebApp
 - default.html
 - default.css
 - default.js
# default.js is generated from components, controllers, state
 - /controllers
	App.jsx

 - /components
	BigUser.jsx
	ListItemUser.jsx
 - /state
	webappstate.js 
 - /state/reducers
	...
 ```

 ## How to build and run

```powershell
# download a copy of the repo
git clone https://github.com/yesdocs/react_redux_sample.git
cd react_redux_sample/WebApp
# Install needed libs
npm install
# build the code
webpack -d --progress
# test the code
npm test
# host code in local node server
node ./server.js
```

The server will be available at [http://localhost:8080](http://localhost:8080/).

Cheers
 
 

