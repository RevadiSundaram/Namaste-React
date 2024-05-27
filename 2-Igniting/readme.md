# NPM
- Is everything but node packaging manager
- Manages the packges
- But not a node package manager
- Standard repository for all packages
- When you create a CRA, it automatically has NPM
- npm init 

# package.json
- Configurations file for npm
- If we are installing some packages, npm will take care using package.json

# Bundler
- It packages your app and ships through production
- Eg: parcel, vite, web pack
- CRA uses web pack behind the scenes
- In our project, we use parcel

# Parcel
- Gives strength to our app
- It is a node package (we have to install it)
- npm install -D parcel (-D is for dev dependency)

# Dev Dependency vs Normal Dependency
- Dev is for development phase
- Normal is used for production also

# Caret and Tilda
^ - Caret (It will be automatically updated to newer version)
~ - Tilda (It will be automatically upgraded to major version)

# Diff btw package.json and package-lock.json
package.json - It keeps all details about own app and apprx version
package-lock.json -It keep details of exact version of our packages and dependencies

# Node_Modules
- fetches all the code of parcel and puts into node modules
- fetches all the code of all the dependencies into our system
- Every dependency in node_module will have its own package.json

# Transitive dependencies
- Parcel is dependant on some things and some things and dependant on some other things


# Do not push to git
- We can re-create node_modules even after deleting it with npm install
- So it is not required to push it into git because it is so huge
- whatever we can regenerate we shouldn't put it on git

# To run the app
- npx parcel index.html
- Parcel gave the server for us and h osted it on the server
- cdn links is not a preferred way to fetch react into our app


# npm vs npx
npm - installing a package
npx - executing a package

# To run React
- npm install react
- npm install react-dom


# Browser Scripts
- Normal js does not have import
- So have to include type="module" in src

# Uses of Parcel (parcel.org)
- It creates dev build
- It creates local server
- HMR - Hot Module Replacement
- It uses File Watching Algorithm (written in C++)
- Gives Faster builds because of Caching
- It does Image Optimization
- It does Minification of the files
- Does Bundling
- It compress your files
- Consitent Hashing
- Code Splitting
- Differential Bundling (supports older browsers)
- Error Diagnostics (Beautiful Error Display View)
- Load in https 
- Tree Shaking (Remove unused code)
- Diff build for dev and prod bundles

# Creating Prod Build
- npx parcel build index.html
- To resolve the error go to package.json -> remove main

# Dist
- When building the app, it will build inside dist folder

# Git
- Local -> Git -> (fetches) Server -> (host) End User
- Server will have its own node_modules with npm install
- But it will not be the same as local

# Browsers List (browserslist.dev)
- To support older versions of code
"browserslist": [
    "last 2 Chrome version"
]