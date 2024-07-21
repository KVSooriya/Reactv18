1. What is "Thinking in React"?
   Building react applications requires a completely new mindset because its very different from building applications with vanilla Javascript. So to build react apps, we not only need to learn how to work with the React API in practice like with all the different functions like useState, useEffect but we also need to be able to think in react. Basically we need to enter the react mindset. Now, once we have both the skills, we will master react to build professional react applications.

   What does thinking in react mean?
   While we build an application, thinking in react means that we have a very good mental model of how and when to use all the react tools like components, state, props, general data flow, effects and many more. Its also about always thinking in terms of state transitions rather than in element mutations as we have learned before.

   "Thinking in react" Process
   i. Break the desired UI into components and establish how these components are related to one another, so to establish the component tree. This also includes thinking about reusability and composability of components.
   ii. After that, we can start by building a static version of the application. So without any state and interactivity. By doing this, we do most of the coding upfront before having to worry about state and interactivity.
   iii. Think about state
        When to use state
        Types of state: local vs. global
        Where to place each piece of state
   iv. Then finally, we think about establishing how data flows through the application. This includes thinking about
       One-way data flow
       Child-to-parent communication
       Accessing global state

   Step iii. and iv. is what we collectively call state management.
   
   When we know how to "think in react", we will be able to answer
   i. how to break up a UI design into components?
   ii. how to make some components truly reusable?
   iii. How to assemble UI from reusable components?
   iv. What pieces of state do we need for the interactivity that we want
   v. Where to then place each of these states? (What component should "own" each piece of state)
   vi. What types of state can or should we use?
   vii. How to make the data flow through the application


2. Fundamentals of State Management
   Managing state is the most important aspect when it comes to thinking in react. We can use the useState function to create multiple pieces of state in order to track data that changes over the lifecycle of an application. How do we know what pieces of state do we need in our application and where exactly to place them inside the code? Thats where state management comes into play.
   
   State management is deciding when we need to create new pieces of state, what types of state we need, where to place each piece of state inside our code base, and also how all the data should flow through the app. State management is basically giving each piece of state a home within our code base.

   Up until this point, in our small apps, we never had to worry about state management at all. We simply placed each state in a component that needed it and thats it. But as an application grows, the need to find the right home for each piece of state, start to become really important, no matter if that home is the component where we first need that state, some parent component or even global state.

   And speaking of global state, lets analyze the difference between the big two types of state that exist in react: global state and local state.

   Types of State: Local vs. Global State
   In react, each piece of state is either local state or global state. 
   i. Local state is state that is only needed in one component or any few different components like child or sibling components. We simply create a piece of local state using the useState function inside a certain component. And that piece of state is then only accessible to that exact component and maybe to its child components if we pass the state using props.
   
   ii. Global state is state that many different components in the app might need access to. Therefore, when we define state as being global, that piece of state will become accessible to every single component in the entire app. Its shared between all components and therefore, we can also call this shared state. In practice, we can define global state using React's Context API or also an external global state management library like Redux.

   The distinction between local and global state will matter more in large applications. In fact, one important guideline in state management is to always start with local state and only move to global state if we truly need it.

   
   Very Important:
   When we actually need state and where we should place it?
   i. When to create state?
   It all starts with us realizing that we need to store some data. Now, when this happens the first question to ask is, will this data change at some point in time? And if the answer is no, then all we need is a regular variable, so probably a const variable. However, if the data does need to change in the future, the next question is, is it possible to compute or to calculate this new data from an existing piece of state or props? If thats the case, then we should derive the state. So, basically calculate it based on an already existing state or prop (important concept). However, most of the time we cannot derive state. And in that case, we need to ask ourselves whether updating the state should re-render the component. If no, there is actually something called a Ref which persists data over time like regular state, but does not re-render a component. So, its basically a special type of state. Now, most of the time we actually do want state to re-render the component. And so what we do is to create a new piece of state using the useState function and we then place that new piece of state into the component that we are currently building. And so that's the always start with local state guideline. And with this, we have completed the decision process of when to create state.
   ii. Where to place state?
   So, if the state variable that we just created is only used by the current component then simply leave it in that component and we're done. So thats the end of the process right there. However, the state variable might also be necessary for a child component. And in that case, simply pass the state down into the child component by using props. Now, if the state variable is also necessary for one or a few sibling components or even for a parent component of our current component, its time to move that state to the first common parent component. And in react, this is what we called lifting state up (super important concept). Now finally, the state variables might be needed in even more than just a few siblings, so it might be necessary all over the place in the component tree. That sounds just like global state (referred later).


3. Lifting State Up
   Far-Away application created in previous section
   We now want to store the form data into the application to show the list of items we need to pack in the UI. ie. we need to pass the form data into the PackingList component. Can we pass the Form Data into the PackingList component? No since its a sibling component. Then we need to move the state up to the closest parent component which is App component.

   Step 1: Instead of placing the items state inside the Form component, we placed it inside the App component.
   Step 2: We passed the function to the Form component to provide the component an access to update the items state. We then can call this
   function from the Form component when we need to update an item in the state
   Step 3: We then passed the items state to the PackingList so that now it can render items in the UI

   So, by lifting state up to the common parent component the state can now be used by both components which needed it.


   export default function App() {
   // Lifting state up
   const [items, setItems] = useState([]);

   function handleAddItems(item) {
    setItems((items) => [...items, item]);
   }

   return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
   );
   }
   
   function Form({ onAddItems }) {
    .....
    function handleSubmit(e) {
   
    e.preventDefault();

    // If description is empty, return
    if (!description) return;

    const newItem = { id: Date.now(), packed: false, description, quantity };
    onAddItems(newItem); // We called the function in the App parent component to update the items state

    // Once the form is submitted and the values are taken out, set back the elements to its initial state
    setDescription("");
    setQuantity(1);
    } 

     .....
    }


    function PackingList({ items }) {
    return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
    );
    }


4. Reviewing Lifting Up State
   Child-to-Parent communication
   By lifting up state, we are placing the state in the parent component? But what if the child needs to update that state in the parent component. ie. in far-away application how to update items in the app component. For that, we need to provide the component with the access of setting the state by passing function as a prop. Either setter function to update the state or a function that sets the state. Previously for that we passed handleAddItems function to the Form component so that it can update the state in the app parent component. This is how child-to-parent communication happens.

5. Derived State
   Derived state is simply state that is computed from another existing piece of state or also from props.
   If a data depends on another existing piece of state, we dont need to create another piece of state for that data. Doing so, can be problematic
     i. Because now we have to keep all these states in sync ie. we need to always update them together
     ii. It also re-render the component for each state update which is unnecessary

   Instead we can simply derive from the existing state and therefore solves all these problems. We can derive the state from existing state and store them in regular variables, no useState required, which will cause no unnecessary re-renders. The existing state will be the single source of truth for this derived data making sure that everything will always stay in sync. And this works because updating the existing state will re-render the component which means the function is called again. And the derived states will also be updated accordingly.

   Now, most of the time we cannot derive state but whenever we have a situation like this one, where one state can easily be computed from another, always prefer derived state.

6. Calculating Statistics as Derived State
   
   export default function App() {
   // Lifting state up
   const [items, setItems] = useState([]);

   function handleAddItems(item) {
    setItems((items) => [...items, item]);
   }

   .....

   return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
   );
   }

   function Stats({ items }) {
   if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
   }

   // Derived States
   const numItems = items.length; 
   const numPacked = items.filter((item) => item.packed).length;
   const percentage = Math.round((numPacked / numItems) * 100);
   return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
   );
   }

7. Moving components into seperate files
   In Javascript, we can export in two ways
   i. We can have named exports
      Eg: export function Logo
      With this, we would create an export called Logo which we would then have to import with exactly that name into the other files.
      import { Logo } from "./Logo" -> using {}, this is how we do named export
   
   ii. Default export - Usually in react apps we do default export
      Eg: export default function Logo
      Then we can use any name that we want to import
      import Logo from "./Logo" or import X from "./Logo"


8. The "children" prop
   Making a reusable button - using steps project from previous section
   <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
              emoji="👈"
            />
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
              text="Next"
              emoji="👉"
            />
          </div>

   function Button({ bgColor, textColor, onClick, text, emoji }) {
   return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      <span>{emoji}</span>
      {text}
    </button>
   );
   }

   We have created button as reusable component and passed down the props. We have also passed the text inside the button using text and emoji props. But what if we wanted Previous side emoji on the left side and next side emoji on the right side. With this, we kind of have a problem because we already have so many props. Do we want to add another prop for the direction? Well, maybe not. Instead we will make use of the children prop.
   Instead of passing the direction, emoji and text which are basically the content here of this button element, what if we could simply pass the content right into the button as well? Or in other words, what if we could pass simply some JSX into the component and then the component could use that JSX and simply display it.
   Up until this point, all our components have always been self closing
   <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
              text="Previous"
              emoji="👈"
            />
   Just like we do with HTML elements, where we have an opening tag, then some content and then a closing tag, we can do exactly the same with react components.
   <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
      <span>👈</span> Previous
    </Button>
    <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
      Next <span>👉</span>
    </Button>

   Then we need to give the button element access to whatever content we wrote into the opening tag and the closing tag. And thats where children prop comes into play.
   The children prop is a prop that each react component automatically receives. And the value of the children prop is exactly what is between the opening and closing tag of the component. children is a predefined keyword inside react.

   function Button({ bgColor, textColor, onClick, children }) {
   return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
   );
   }

   This is really important tool that is used all the time in react. One of the most useful feature and the reason is that it allows us to make our components truly reusable.

   This technique is really useful for building generic components that do not know about their content before actually being used. Like, for eg, a modal window, a generic slider, or simply a generic button like above
   