# react redux sample
A simple react app using redux and immutable.js

The app is being hosted on Azure [react redux sample](http://webappsampleredux.azurewebsites.net/).

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type.

```powershell
# default.html & default.js & default.css are all that is needed to run the site, default.js is a generated file
/WebApp
 - default.html				# main file for hosting
 - default.css				# simple css file
 - default.js				# default.js is generated from components, controllers, state
 - /controllers
	App.jsx					# Main app
	JustList.jsx			# list pane on the left
	UserSelected.jsx		# large pane on the right showing details
 - /components
	BigUser.jsx				# displays a user in a big format
	ListItemUser.jsx		# displays a user in a small list item format
 - /state
	webappstate.js			# holds app state
 - /state/reducers
	userreducer.js			# the user reducer and actions
 ```

 ## How to build and run

```powershell
# download a copy of the repo
git clone https://github.com/yesdocs/react_redux_sample.git
cd react_redux_sample/WebApp
# Install needed libs
npm install
# build the code (this generates default.js)
webpack -d --progress
# test the code
npm test
# host code in local node server
node ./server.js
```

The localaly hosted server will be available at [http://localhost:8080/](http://localhost:8080/).

Cheers
 
 

