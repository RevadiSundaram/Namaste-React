# What is NPM ?
- Manages packages
- standard repository for all packages
- it is not a node package manager
- when you create CRA, it creates npm

# What is `Parcel/Webpack`? Why do we need it?
- It is great bundlers that can help you improve your web development workflows.
- If you value flexibility and customization over simplicity and speed, you might prefer Webpack

# What is `.parcel-cache`?
- It stores information about your project when parcel builds it.
- When it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. 
- It's a key reason why parcel can be so fast in development mode.

# What is `npx` ?
- Node Package eXecute
- It is simply an NPM package runner. 
- It allows developers to execute any Javascript Package available on the NPM registry without even installing it

# What is difference between `dependencies` vs `devDependencies`?
- Dependencies are the crucial packages required for your application to function in a production environment.
- devDependencies are tools and utilities that aid in the development process but are not needed in production

# What is `Tree Shaking`?
- Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code by imports/exports
- It comes with builtin in webpack and parcel
- In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. 
- This is called "tree shaking" or "dead code elimination". 
- Tree shaking is supported for both static and dynamic import(), CommonJS and ES modules, and even across languages with CSS modules.

# What is Hot Module Replacement?
- Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh. 
- This means that application state can be retained as you change small things. 
- Parcel's HMR implementation supports both JavaScript and CSS assets.

# List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- HMR (Hot Module Replacement) - adds, or removes modules while an application is running, without a full reload.
- File watcher algorithm - File Watchers monitor directories on the file system and perform specific actions when desired files appear.
- Minification - Minification is the process of minimizing code and markup in your web pages and script files.
- Image optimization
- Caching while development
- Error Diagnostics
- Code splitting
- Compression
- Consistent Hashing

#  What is `.gitignore`? What should we add and not add into it?
- A gitignore file specifies intentionally untracked files that Git should ignore
- If the file is generated by another process, like a build runner can be ignored.

# What is the difference between `package.json` and `package-lock.json`
- package.json - It keeps all details about own app and apprx version
- package-lock.json -It keep details of exact version of our packages and dependencies

# Why should I not modify `package-lock.json`?
- package-lock.json file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. So don't modify it, It's being handled automatically by NPM.

# What is `node_modules` ? Is it a good idea to push that on git?
- Ignoring node_modules is a best practice in Node. js Git repositories. 
- It helps in keeping your Git operations efficient, your repository size manageable, and your codebase clean.
- node_modules folder like a cache for the external modules that your project depends upon. 
- When you npm install them, they are downloaded from the web and copied into the node_modules folder and Nodejs is trained to look for them there when you import them (without a specific path). 
- Don't push node_modulesin github because it contains lots of files(more than 100 MB), it will cost you memory space.

# What is the `dist` folder?
- When building the app, it will build inside dist folder
- the build folder which contains all the files and folders which can be hosted in server

# What is `browserlists`
- browserslist is a configuration file that determines which browsers your project should support.
- To support older versions of code
"browserslist": [
    "last 2 Chrome version"
]

# Diff bundlers: vite, webpack, parcel
- `Webpack` - Configuration Overhead, Rich Ecosystem, Code Splitting, Extensive documentation
- `Parcel` - Zero Configuration, Fast Development Server (HMR), Limited Configuration Options, Out-of-the-Box Support
- `Vite` - Native ES Modules, Development Server Speed, Optimised for Production, Type-script support

# Use Cases And Summary
Webpack: Choose Webpack for complex, large-scale projects where customisation and fine-grained control are essential. It’s well-suited for web applications with intricate build requirements.
Parcel: Opt for Parcel when you want a hassle-free, zero-configuration experience. It’s perfect for quick prototyping, small to medium-sized projects, and developers who prefer simplicity.
Vite: Consider Vite if you value speed, rapid development, and native ES module support. It’s an excellent choice for modern web applications and projects where performance matters.

# ^ - caret and ~ - tilda
- ^2.3.0 — [Caret Symbol] This tells npm to upgrade to minor and patch versions, but not major versions. So, basically 2.3.4, 2.3.9, 2.4.5, 2.8 but not 3.0.0 onwards. (Upgrade to minor and patch, but not major)
- ~2.3.0 — [Tilde Symbol] This tells npm to upgrade to patch versions, but not minor and major versions. So 2.3.4, 2.3.9 but not 2.4.0 onwards. (Upgrade to patch, but not minor and major)

# Script types in html
[Script Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)