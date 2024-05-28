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
