1. Rendering the root component
   index.js - It really needs to be called index.js because webpack, which is the module bundler in this project, expects the entry point to be called index.js
   Importing modules is part of Javascript specifically since ES6 ie. import syntax is coming from Javascript.

   Creating our first Component: App
   It wouldn't have to be called App, this is just a convention. What is neccesary is that the component should start with uppercase.

   Rendering root component into DOM
   // Since React v18
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<App />);
   
   // Older codebase - before v18
   ReactDOM.render(<App />, document.getElementById("root"));
   And also the import should be: import ReactDOM from "react-dom" not "react-dom/client".

   StrictMode
   We can simply activate StrictMode by Wrapping App component within StrictMode component.
   root.render(<React.StrictMode><App /></React.StrictMode>);
   StrictMode is really not a big deal. The only thing it does is during development, it will render all components twice in order to find certain bugs. And also react will check if we're using outdated parts of the React API. StrictMode is nothing groundbreaking but its still a good idea to always activate it. 

2. Components as building blocks
   Components are building blocks of UI in react because react applications are entirely made out of components.
   Basically all react does is to take components and draw them on a webpage. It may sound simple but actually it is the main job of react. In more technical terms, React renders a view for each component, and all these views together make up the user interface.
   We can also think component as being a piece of the user interface.
   One key property of components is that each component has its own data, Javascript logic and appearance. So basically, each component describes how it works and what it looks like, which makes them such a great way of building UI.
   So, in react we build complex UIs by building multiple components and combining them.
   Components can be reused, nested inside each other and pass data between them.
   To break a UI design into components, we need to analyze the components that we need to create, using component tree.

3. Creating and Reusing a component
   Note : All the assets of the app like images will go into the public folder because Webpack, so the module bundler will then basically automatically get them from there.

4. What is JSX
   JSX is a declarative syntax that we use to describe what components look like and how they work based on their data and logic. So, its all about the components appearance.
   This means that each component must return one block of JSX, which react will then use to render the component on the UI.
   JSX is a Javascript Extension that allows us to embed Javascript, CSS and React components into HTML.
   
   If react is a Javascript framework, then how will it understand this HTML looking code? JSX is just an extension of Javascript which means that there is a simple way of converting JSX to Javascript. This is done by a tool called Babel, which was automatically included in our application by create-react-app. Then each JSX element gets converted to a React.createElement function call. This conversion is neccesary because browsers of course, do not understand JSX. They only understand HTML. So, behind the scenes, all the JSX that we write is converted into many nested React.createElement function calls. And these function calls are what in the end, create the HTML elements that we see on the screen. 

   We could use React without JSX only by using createElement function but thats not good. The code will become harder to understand.

   What does it actually mean that JSX is declarative?
   When we try to build UIs using vanilla Javascript, we will by default use an imperative approach. This means that we manually select elements , traverse the DOM and attach event handlers to elements. Then each time that something happens in the app like a click on the button, we give the browser a step-by-step instructions on how to mutate those DOM elements until we reach the desired updated UI. So, in the imperative approach we basically tell browser exactly how to do things. However, doing this in a complex app is completely unfeasible. Thats why React chose to use a declarative approach. So, a declarative approach is to simply describe what the UI should look like at all times, always based on the current data (either props or state) thats in the component. And so, we use JSX to describe the UI based on props and state. In essence, the difference between imperative and declarative is that in the declarative approach, we use JSX to tell React what we want to see on the screen but not how to achieve it step-by-step. React can figure that out on its own, basically.

5. Creating more components
   We can create components using regular/normal functions or using function expression and arrow functions.
   function Header() {}
   or
   const Header = function() {}
   or
   const Header = () => {}

   We can enter Javascript mode by using {}.

   function Footer() {
   return (
    <footer>{new Date().toLocaleTimeString()}.We're currently open</footer>
   );
   }

   This is the power of being able to combine Javascript basically right into the HTML.

6. Javascript logic in components
   We have already written some Javascript logic before but we always did it just inside the JSX that is returned. But since components are just Javascript functions, we can of course do any Javascript in them that we want. And that code is then simply executed as soon as the function is called. So, as soon as the component is initialized.

   Writing Javascript inside Footer component
   function Footer() 
   {
   const hour = new Date().getHours();
   const openHour = 10;
   const closeHour = 22;
   const isOpen = hour >= openHour && hour <= closeHour;
   console.log(isOpen);

   return (
    <footer>{new Date().toLocaleTimeString()}.We're currently open</footer>
   );
   }

7. Seperation of Concerns
   JSX combines HTML, CSS and Javascript into one single block of code. Before single page apps, we always had one file for HTML, one for Javascript and one for CSS. So basically, one technology per file. That was our traditional seperation of concerns. However, as pages got more and more interactive, they became single page applications where the Javascript started to determine the user interface and the content in general. In other words, Javascript became more and more in charge of the HTML. If the Javascript is in charge of the HTML anyway, so if the logic and the UI are so tightly coupled together, then why should we keep them seperated in these different files and in different code blocks? Well, the answer to this question is what gave us react components and JSX.

   The fact that the logic and UI are so coupled in modern web applications, is really the reason why a react component contains the data, the logic and the appearance of one piece of the UI. In fact, it's the fundamental reason why react is all about components. And the same is actually also true for most other modern front-end frameworks.

   In the case of react apps, instead of one technology per file, we have one component per file. So, one component that contains data, logic and appearance all mixed together. 

   Some thought React throws seperation of concern out of the window. But React does actually have seperation of concerns. It's just not one concern per file as we had traditionally but one concern per component. So each component is in fact, only concerned with one piece of the UI. Then within each of the components, of course we still have the three concerns of HTML, CSS and Javascript all mixed up. So compared to the traditional seperation of concerns, this is a completely new paradigm that many were not used to it in the beginning. But now, many years later, everyone got used to it and it works just great. So having all the information about a certain component in one single place, really does work in an amazing way.

8. Styling React applications
   We know, react components can also contain CSS styles. In react, we have many different ways of styling our components and react doesn't really care about how we do that. It doesn't have an opinion about styling. And the reason is that just that React is actually more of a library than a framework. So, it doesn't have a preferred way of how we should style our components and in the end our applications, therefore we can choose between many different options. For eg, we can use inline styling, we can use external CSS or even SAAS files. We can use CSS modules, styled components, or even Tailwind CSS is an option to style our components. Now, just using inline CSS. Many discussed later.

   As we know, in HTML we can actually style elements using the style attribute. In html, we write those styles in a string like this.
   <h1 style="color:red; font-size:48px; text-transform: uppercase">
   However, in JSX, that's not how it works. So, in JSX, we actually need to define inline styles using a Javascript object. So, if we need to write a Javascript object we first need to enter Javascript mode using {}. But then we need another set of {}, and that is to create an object.
   <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
   Note: font-size in css is fontSize here (property names are camelCased).

   We can also use external CSS file to style our component.
   We need to first import the CSS file into the component using import
   import "./index.css";
   Then the webpack will take care of then taking the styles out of the CSS file and injecting them into our application. 

   We can also have CSS that really only belongs to one single component using styled components.

9. Passing and receiving props
   props is essentially how we pass data between components. In particular, from parent components to child components. So we can imagine props as being like a communication channel between a parent and a child component.  

   To define props, we do it in two steps
   i. First, we pass the props into the component.
   2. Second, we receive the props in the component that we pass them into.

   function Menu() {
   return (
    <main className="menu">
      <h2>Our menu</h2>
      // Passing props into the component
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}  // We pass number by entering into the Javascript mode else, if we specify as "10" it will simply pass 10 as string
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
    </main>
   );
   }

   // Second, receive props in the component
   function Pizza(props) {

   return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
   );
   }

   Note: Whenever we want to pass in something that is not a string, we use Javascript mode basically. Because, in fact, we can pass anything as a prop. It doesnt have to be a string or a number. We can pass in arrays, objects or even other react components.

10.Props, Immutability and One-Way data flow
   Props are used to pass data from parent components to child components (down the component tree)
   Therefore, props are an essential react tool to configure and also to customize components. So, we can imagine props as settings that we can use to make a parent component control how its child component should look like and how it should work. In that regards, props are just like arguments passed to regular Javascript functions.
   Anything can be passed as props: single values, arrays, objects, functions, even other components.

   Props are read-only!
   We know react renders a component based on its current data and that UI will always be kept in sync with that data. But what that data actually is? So, this data that react uses to render a component is made out of props and state. State is basically internal component data that can be updated by the component's logic by the component itself while props on the other hand is data that is coming from the parent component. So, its the parent component who owns that data and so therefore it cannot be modified by the child component. Instead, props can only be updated by the parent component itself. So, react gives us a strict rule, that props are immutable. 
   So, they cannot be changed, they are read-only. And if at any point we feel like we need to mutate props actually what we need is state because state is for data that changes over time.
   Why props are immutable in react?
   Props are just an object. Therefore, if we change the props object in our component it would also affect the parent component because thats just how objects work in Javascript. So, when we copy an object and mutate the copy the original object will also be mutated. So, to avoid the side-effects props are made immutable in react.

   One-Way Data flow
   React uses a so-called one-way data flow. It means that in react applications, data can only be passed from parent to child components, which happens by using props. In other words, data can flow from parents to children but never the opposite way.
   Why react uses a one-way data flow?
   i. It makes application more predictable and easier to understand for developers because it is just a lot easier to understand where the data is coming from if it only flows in one direction.
   ii. It makes application easier to debug because we have more control over the data and we understand exactly how that data flows around.
   iii. Two-way data binding is usually less efficient   
   Then what if we wanted to pass some data, for eg, some state, up to a parent component? There is actually a clever way to do that (later). 

11.The Rules of JSX
   General JSX Rules
   1. JSX works essentially just like HTML. So, it has a very similar syntax. However, we can enter a Javascript mode by using {} anywhere in a markup where a value, like text or an attribute is expected.
   2. Into the Javascript mode we can place any Javascript expressions (so anything that produces a value). So, we can reference variables, create arrays or objects, we can loop over array using the map method or we can use operators like the ternary operator.
   3. What's not allowed are statements. (if/else, for, switch or any other statement)
   4. A piece of JSX produces a Javascript expression or in other words a piece of JSX is just like any other Javascript expression.
   Now, this fact has two important implications:
      i. It means that we can place other pieces of JSX inside the {} ie. inside the Javascript mode. This is possible because we can put any Javascript expression inside those curly braces and that includes the expressions produced by JSX.
      ii. We can write JSX anywhere inside a component. For eg, we can assign a piece of JSX to a variable. We can also use it inside if/else statements, pass it into functions and many other things.
   5. A piece of JSX can only have one root element. We can also use React Fragments(<></>) if neccesary

   Differences between JSX and HTML
   className instead of HTML's class
   htmlFor instead of HTML's for
   Every tag needs to be closed. Eg: <img/>, <br/>
   All event handlers and other properties need to be camelCased. Eg: onClick or onMouseOver
   Exception: aria-* and data-* are written with dashes like in HTML
   CSS inline styles are written like this {{<style>}}
   CSS property names are also camelCased
   Comments needs to be in {} (because they are JS)

12.Rendering Lists
   Rendering lists is one of the most common things that we do in basically all react applications.
   Each time we render a list with the map method, each of the item that gets rendered needs a unique key property. So, key is basically a prop that is internal to React, which it needs in order for some performance optimizations. Then we need to pass something that is unique to each element as a key.
   
   function Menu() {
   return (
    <main className="menu">
      <h2>Our menu</h2>
      <ul className="pizzas">
        /* Rendering list using map method */
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
   );
   }

   function Pizza(props) {
    return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
   );
   }

13.Conditional Rendering with &&
   Be cautious when using &&: React will not render true or false value but it does renders truthy or falsy values.
   {isOpen && <p>We're open</p>}. It does not render false when the condition is false but it renders p when first condition is true. So,
   react does not renders true or false on the UI.
   But,
   Assume pizzaData.length = 0;
   {pizzaData.length && <p>Pizzas are available</p>}. It renders 0 on the UI because here the first operand is evaluated as false since 0
   is falsy value and the same too is rendered on the screen (due to short circuiting).
   
   So, always use this only, if it returns boolean value of true or false.

   function Footer() {
   const hour = new Date().getHours();
   const openHour = 2;
   const closeHour = 22;
   const isOpen = hour >= openHour && hour <= closeHour;
   console.log(isOpen);

   return (

    <footer className="footer">
      // Conditional Rendering using &&
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
   </footer>
   );
   }

14.Conditional Rendering with Ternaries
   Ternary operator is a really important tool in our react toolbox.

   {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
   )}

15.Conditional Rendering with Multiple Returns
   We can do conditional rendering inside component using multiple returns. There is nothing stopping us from having multiple return keyword based on condition. So, of course each component still only can return one block of JSX, but that return can depend on a condition. This type of rendering is useful when we want to render entire components conditionally.

   function Pizza(props) {
   console.log(props);

   // Early return
   if (props.pizzaObj.soldOut) return null;

   return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
   );
   }

16.Destructuring props
   Each time that we pass some props into a component, that component will then automatically receive the object of props, which will contain all the props that we passed in. We can use destructuring to take the properties out of the props object so it will be easier to use them inside JSX. Destructuring makes props more readable.

   // Destructuring props 
   function Pizza({ pizzaObj }) {
     if (pizzaObj.soldOut) return null;

     return (
      <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
   );
   }

   function Order({ closeHour, openHour }) {
   return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
   );
   }

17.React Fragments
   JSX expressions must have one parent element. So a piece of JSX, no matter where it is defined can only have in fact one root element. Else we get errors. And this has happened before and the way we always solve this was by simply wrapping everything in a div or some other component. Somecase, this will mess up our formatting that we had applied earlier.
   What if we do not want to render one element which contains two elements, but we really want to render two elements seperate without having one element as a parent of two. This is the case in which we need React Fragments.

   React Fragments basically lets us group some elements without leaving any trace in the HTML tree, so in the DOM.
   {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>  // React fragment
      ) : (
        <p>We're still working on our menu. Please come back later </p>
   )}

   Sometimes, we need to add a key to a react fragment, for eg, when we are using it to render a list and so then we need to actually write it in a slightly different way.
   <React.Fragment></React.Fragment>

18.Setting Classes and Text Conditionally
   i. Setting Text conditionally
       <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>  // Setting text conditionally
       </div>

   2. Setting Class conditionally
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      We entered into Javascript mode first by specifying {} then we use the idea of template literals where we can place expressions inside string .. so using template literals we used ternary operator to determine the class name for applying suitable style based on condition.