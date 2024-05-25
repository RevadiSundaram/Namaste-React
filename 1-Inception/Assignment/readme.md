# Namaste-React
# Episode - 1 Inception

# What is Emmet?
It is a set of plug-ins for converting Acryonyms into block of structured code

# Difference between Library and Framework?
- Framework is a set of pre-written code that provides a structure for developing software applications
- Library is a collection of pre-written code that can be used to perform specifc tasks

# What is CDN? Why do we use it?
- CDN - Content Delivery Network
- It allows for a quick transfer of assests needed for loading internet content, including HTML pages,JS files, stylesheet, images and videos.

# Why is React known as React?
It "reacts" quickly to changes without loading the whole page

# What is crossorigin in script tag?
- crossorigin attribute sets the mode of the request to an HTTP CORS request
- Webpages makes requests to load resources on other servers using CORS
- cross-origin is a request for resource (stylesheets, iframes, images, font, scripts) from another domain

# Two Attributes
- anonymous - cross-origin request is performed, no credentials are sent
- use-credentials - cross-origin request is performed, credentials are sent (Eg. cookie, certificate, HTTP basic authentication)

# CORS 
- CORS - Cross-origin Resource Sharing
- CORS is a mechanism that allows resources on a webpage to be requested from another domain outside their own domain
- It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request

# Same Origin
- Opposite of cross-origin
- A webpage can only interact with other documents that are on the same server

# What is difference between React and ReactDOM
- React - JavaScript library designed for building better user interface
Eg: Usage of component, classes, elements, etc
- ReactDOM - Complimentary library to react which glues React to browserDOM
Eg: Methods such as render() and findDOMNode()

# What is difference between react.development.js and react.production.js files via CDN?
- In development mode, we can enable and utilize React developer tools, debugging environment attached with source code. 
- We can utilize Hot Module Replacement, diagnostics so that development environment will help to debug code
- In production mode, compression and minification of JS and other resources happens to reduce size of the code which is not in the case of development mode. 
- Performance will be much faster in production mode compared to development mode

# What is async and defer?
- Boolean attribute used with script tag
- When loading web pages two thing are happening
- HTML parsing
- Loading of code - fetching script from network, executing code line by line

# Normal
" <script src="" /> "
- While running a webpage, it will execute html code and when it encounters script tag,
it stops the execution of html,
scripts will be fetched from network,
execute the script tag line by line,
and execute the remaining html

# Async Attribute
" <script async src="" /> "
- It will execute html code,
it will fetch scripts from network parallely and keep it ready,
execute the script tag line by line,
and execute the remaining html
- It does not guarantee order of execution
- If we have to load some external scripts (Eg. google analytics), which is independant of our normal code, then async is good

# Defer Attribute
" <script defer src="" /> "
- HTML parsing continues to goes on,
the script are fetched from the network in parallel,
scripts will execute after parsing is done
- It maintains the order of execution