1.Why do Front-End frameworks exist?

  The main purpose of web application is to serve the data from the server and to keep the user interface stay in sync with data. Without a framework, it would be virtually impossible to keep the huge amount of data in sync with the super complex UI.

  Problems with vanilla Javascript
  1. It requires large amount of direct DOM traversing and manipulation like manual element selection, class toggling, and even manipulation of text and CSS styles. Becomes nightmare and end up with huge mess of entangled spaghetti code.
  2. State such as simple text or numbers are oftentimes simply stored right in the DOM. ie. right in the HTML elements themselves rather than in a central place in the application. The result is that we end up with many parts of the app accessing and changing that DOM state directly which makes the spaghetti code even harder to understand. And even worse, it'll most certainly introduce many bugs into our application.

  Reason why frameworks exist?
  1. Keeping a user interface in sync with data is really hard and lot of work, and frameworks takes those hard work away from developers. So, we developers can focus only on the data and on building our user interface ourselves.
  2. They basically enforce a correct way of structuring and writing code

2. What is React?
  React is a Javascript library for building user interfaces.
  React - Extremely popular, declarative, component-based, state-driven Javascript library for building user interfaces. Created by Facebook.

  Based on component
  React is all about components such as buttons, input fields, search bars and so on.. Components are the building blocks of user interfaces in react. In fact, basically all React does is to take components and draw them on a webpage. That's it. And so we build complex UIs in React by building and combining multiple components. Another thing that we do with components is to reuse them.

  Declarative
  Since we build complex UIs by combining multiple components, each component must have all the information about what it looks like. We describe how components look like and how they work using a declarative syntax called JSX. Declarative simply means telling react what a component and ultimately the entire UI should look like based on current data/state. So react is basically a huge abstraction away from the DOM so that we never have to work with a DOM directly as we would with vanilla javascript. We simply tell React what we want to happen when some data changes, but not how to do it. And again, we do that using JSX.
  JSX - JSX is basically a syntax that combines parts of HTML, CSS, Javascript and it even allows us to reference other react components.

  State-driven
  If we never touch the DOM, then how does React update the UI? Using the concept of state.
  The main goal of react is to always keep the UI in sync with data (which is called as state in react). Based on initial state, React will render a user interface using the components that we wrote using JSX. Then based on some event like a button click, the state might change. Whenever the state changes, we manually update the state in our app and react will then automatically re-render the user interface to reflect that latest state or in other words, react reacts to state changes by re-rendering the UI.

  Javascript library
  Is react a library or a framework? React is actually just a library. The reason is that React itself is really only the so-called view layer. If we wanted to build a complete real world application, we need to choose multiple external libraries to add to our project. For eg, for routing or for data fetching.
  Now to address this, there are actually multiple frameworks that have been built on top of React. So frameworks that include all these functionalities that React is missing out of the box. Most popular ones: Next.js and Remix

  Extremely popular
  Huge demand for react developers
  There is a very large and active React developer community. There is always gonna be lot of tutorials, Stack overflow questions and answers and also lot of support given to other React developers.

  Summary of react 
  ------------------->
  React is good at two things
  1. Renders components on a webpage (UI) based on their current state
  2. Keeping the UI in sync with state, by re-rendering when state changes 
  React does all this by employing something called virtual DOM, a fiber tree, one-way data flow and many other techniques (will learn throughout the course)

3. Setup Development Environment
  VS Code (Editor)
  Google Chrome
  Node JS (Not because we will do some Node.js development but its simply because all the tools that we gonna use run on Node.js)  
  Version for Node JS: Atleast version 18 or above

  Some extensions to be downloaded in VS Code
  ESLint which is a code linter, basically a program that will automatically find errors in our code.
  Material Icon Theme, for the file icons in the file tree.
  
  Settings:
  Eslint run -> onSave

  Setting some snippets to get started:
  Snippets are basically some pieces of predefined code that we can use to greatly speed up development
  We placed some snippets Under Settings ->  User Snippets -> sooriya.code-snippets

4. React Official documentation
   react.dev -> Learn and Reference part most needed

5. Two Options for setting up React Project 
   1. Create-React-App tool 
   2. Vite (build tool)

   Create-React-App
   This is basically a complete "starter kit" for react applications, that was developed many years ago
   All the common development tools are already preconfigured out of the box specifically for react. So, an app created with create-react-app automatically comes with a development server, webpack for module bundling and also important developer tools which includes code linter like ESLint, a code formatter like Prettier, a testing library like Jest and fable for enabling the latest Javascript features.

   Problem with create-react-app: Since it was developed many years ago, it uses some slow and kind of outdated technologies under the hood, and, in particular, the webpack bundler. 

   Recommendation: Don't use for real world app. Use only for tutorials/learning or experiments.

   Vite
   Use for modern real-world apps
   It's basically simply a modern build tool that contains a template for setting up React applications
   Need to manually set up ESLint (and others)

   Why vite is recommended for real-world apps? It's just extremely fast to automatically refresh the page when the code changes (which is called as Hot Module Replacement or HMR). And bundling is extremely fast too.


6. Setting React project with Create-React-App tool
   Create-React-App is a command-line interface tool (Either we can use command prompt on windows or integrated terminal in VS code)

   To create new project
   npx create-react-app name-of-the-app

   To use the particular version of the create-react-app like 5, then use
   npx create-react-app@5 name-of-the-app

   npm - node package manager

   Maven is the most popular build and dependency resolution tool for Java, just like NPM is for JS. NPM is a node package manager. Which helps to manage the node packages for you application. All the packages/modules of the React are node packages, So you will be adding/installing packages or modules using NPM for React application.

   Exploring the project structure
   package.json - which contains the name of the app, the version, the dependencies and also the npm scripts. (similar to pom.xml file)
   node_modules folder - which is where all the npm packages have been installed
   src folder - Most of our development work will happen inside src folder
   public folder - This is where basically all the assets that will end up in the final application go. Like all the images, index.html ..
