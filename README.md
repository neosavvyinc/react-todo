Goal of this project

- Implement a basic Todo App in React with Redux
- Implement a basic Flow type checking approach (http://flowtype.org/docs/existing.html)
- Implement a simple Model Layer with Immutable.js that encapsulates the use of Immutable
- Implement a testing layer with Immutable and Some Framework (Tape?)

### Getting Started

The first thing I am researching is how to get started. Given there are tons of boiler plate examples, yeoman generators
out there, and other starting points that I am not sure how advanced they are, I am opting to just use WebPack. Let's
see if I can just get WebPack getting my project compiling and served.

So far I have gone down the path of using:
1. https://github.com/babel/babel-loader to compile my JSX / ES6 Code to a bundle
2. WebPack and WebPackDevServer to execute the module loader above and serve my code as it changes