1. Steps Component
   Create a new project: npx create-react-app@5 steps

   const messages = [
   "Learn React ⚛️",
   "Apply for jobs 💼",
   "Invest your new income 🤑",
   ];

   // Layout of the app without any interactivity
   export default function App() {
   const step = 1;

   return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
    );
    }

2. Handling Events the React Way
   In react, we use something similar to the HTML inline event listener. So, basically we will directly listen for the event right on the element where they will happen. For eg, on the button we use onClick prop and then we simply specify a function here. So, click is the event name and then we always prefix it with the "on". We will pass a function inside onClick and that function will then be executed whenever there is a click happening on the DOM element. We can also pass a arrow function that needs to be executed when the event is triggered.
   <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={() => alert("Previous")}>Previous</button> 
   
   Note: We cannot write function call inside eventListener we need to specify only the function ie. we cannot write onClick={alert("Previous")}. Why? As the component is initialised ie. when the component is called, as soon as it sees the function call inside the event handler it calls the function. We dont want that. Instead we need to define a callback function that will be called at a later time. ie. when the event is triggered.

   Starting event handler functions with handle is pretty standard in react development.
   function handlePrevious() {
    alert("handle previous");
   }

   function handleNext() {
    alert("handle next");
   }

   <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handlePrevious}>Previous</button>
   <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={handleNext}>Next</button>

3. What is State in react?
   State is the most important concept in react. So everything basically revolves around state in react. 
   What react developers need to learn about state
   i.   What is state and why do we need it?
   ii.  How to use state in practice?
        useState
        useReducer
        Context API
        Or even external tools like Redux
   iii. How to think about state in react?
        When to use state
        Where to place state
        Types of state

   props - data that is passed from parent component to child component
   What if a component needs to actually hold its own data and also hold it over time? Also, what if we actually want to make our app interactive changing the UI as a result of an action? Well, thats where, state comes into play. So, state is basically data that a component can hold over time and we use it for information that a component needs to remember throughout its lifecycle. Therefore, we can think of state as being the memory of a component. 

   Updating state triggers react to re-render the component. So, state is how react keeps the user interface in sync with the data. We change the state, we change the UI.

   State allows developers to do two important things
   i.  State allows us to update the component's view by re-rendering the component. So, it gives us the way to change part of the UI.
   ii. State allows developers to persist local variables between multiple renders and re-renders.

   State is the most powerful tool that we have in the world of react. So, understanding the mechanics of state, will unlock the power of React development for us.  

4. Creating a State variable with useState
   In order to use useState in practice in a component, we do it in three steps
   i. First, we add a new state variable
   ii. Then we use it in a code, usually in JSX
   iii. We then update the piece of state in some event handler

   useState function is what we call a hook in React. And we can identify hooks because they start with use keyword here. So, all the react functions that start with use like this, for eg, useEffect or useReducer are React hooks. We can only call hooks like useState, on the top level of the function. So of the component function. Not inside an if statement or inside another function or inside a loop.

   Imp Note: We should really only update state using the setter function provided by useState

5. The Mechanics of State
   In react, we do not manipulate the DOM directly when we want to update a component's view. Then how do we update the component on the screen whenever some data changes or whenever we need to respond to some event like a click. The answer is : State. React updates a component view by re-rendering the entire component whenever the underlying data changes (state). 
   React preserves the component state throughout re-renders and so eventhough a component can be rendered and re-rendered time and time again, the state will not be reset unless the component disappears from the UI entirely which is what we call unmounting.

6. Updating state based on current state
   When we want to update a state based on the current value of the state, pass in a callback function which will receive as an argument, the current value of the state.
   So, instead of manually setting the current value
   setStep(step + 1);
   use
   setStep((s) => s + 1);

7. More thoughts about State and State guidelines
   Each component really has, and manages, its own state. So, even if we render the same component multiple times (reusing) on one page, each of these component instances will operate independently from all the other ones. Each component state is independent from one another. Changing state in one component does not affect other.
   Instead of viewing a UI as explicit DOM manipulations, with state, we now view a UI as a reflection of data changing over time. We describe that reflection of data using state, event handlers and JSX. So, we describe the UI, React does the rest. This is what we call as declarative approach.

   Practical guidelines about state
   i. Use a state variable for any data that the component should keep track of ("remember") over time. This is data that will change at some point. In vanilla JS, that's a let variable, or an [] or {}.
   ii. Whenever we want something in the component to be dynamic, create a piece of state related to that "thing", and update the state when the "thing" should change.
   Eg: A modal window can be open or closed. So we create a state variable isOpen that tracks whether the modal is open or not. On isOpen=true we display the window, on isOpen=false we hide it.
   iii. If we want to change the way a component looks, or the data it displays, update its state. This usually happens in an event handler function.
   iv. When building a component, imagine its view as a reflection of state changing over time.
   v. For data that should not trigger component re-renders, dont use state. Use a regular variable instead. This is a common beginner mistake. Because that will cause unnecessary re-renders which can cause performance issues. It's very common to need some variables that are not state. And for those, we can just use regular variables defined with "const".



8. Starting a new Project
   npx create-react-app@5 travel-list

9. Building the Layout

   export default function App() {
   return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
   );
   }

   function Logo() {
   return <h1>🌴 Far Away 💼</h1>;
   }

   function Form() {
   return (
    <div className="add-form">
      <h3>What do you need for your ❤️ trip?</h3>
    </div>
   );
   }

   function PackingList() {
   return <div className="list">LIST</div>;
   }

   function Stats() {
   return (
    <footer className="stats">
      <em>💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
   );
   }

10. Rendering the Items list
    
    function PackingList() {
    return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
    );
    }

    function Item({ item }) {
    return (
    <li>
      // Conditionally applying style using ternary operator
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
    );
    }

11. Building a form and handling submissions
    One of the most important things that we do on the web is to interact with web applications through forms. So, forms are fundamental in web applications.
    While using select element, this is the way to write down the options for the dropdown
    <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>

    But what we have more number of options? We dont want it to type it over hand. Instead what we do is to, inside of Javascript, we will create an array with the numbers from 1 to 20, and then we will loop over that array, and basically create a list of option elements.
   
    Creating array:
    {Array.from({ length: 20 }, (_, i) => i + 1)}
    O/P: 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    Two ways of creating options
    i. {Array.from({ length: 20 }, (_, i) => (
      <option key={i} value={i + 1}>{i + 1}</option>
      ))}  - Not preferred

    ii. {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}  - Preferred

    onSubmit
    We are using onSubmit event on the form element where it triggers the event when the button is clicked or if we click enter from the input text box. Whereas if we use onClick event right on the button, it triggers the event only when the button is clicked.

    How do we get the data from the form?
    We use something called controlled elements.

12. Controlled elements
    By default, the form elements like input textbox and select, maintain their own state inside the DOM. So, basically inside the HTML element itself. Now this makes it hard to read their values and it also leaves this state right in the DOM which for many reasons is not ideal. So, in react, we usually like to keep all of this state in just one central place. So, inside the react application and not inside the DOM. So in order to do that we use a technique called controlled elements. And with this technique it is React who controls and owns the state of these input fields and no longer the DOM.
    So, since we want to now keep this data inside this application, what that means is that we need some state. Because that form data changes over time and we also want to maintain our application in sync with it. So, in order to implement the controlled elements technique, we follow three steps:
    i. Create a piece of state
    ii. Use that piece of state as a value of the form element that we want to control
    iii. On the same element, listen for the change event and set it to the state.

    And with this, it is now component, so basically its react who is in charge of the state and really of the entire element. And thats the reason why this technique is called as controlled elements.

    Eg
    Step 1
    const [description, setDescription] = useState("");
    Step 2 & 3
    <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)}/>

    How to get the data from the Form component to the PackingList? Could we do that with props? Not really. Because these are sibling components. The Form is not a parent component of the PackingList and therefore we cannot pass props from Form into the PackingList. So because data can only flow down the tree but not up or sideways. Then we need to find another solution. And so this is where we really need to start thinking more about state and state management. 



13. State vs. props
    i. State is internal data, that is owned by the component in which it is declared. On the other hand, props is external data, that is owned by the parent component. 
    ii. We can think of props as function parameters. So, as a communication channel between parent and child components where parents can pass data into children. State on the other hand can be thought of as the component's memory because it can hold data over time, so across multiple re-renders.
    iii. State can be updated by the component itself. This will then cause the component to be re-rendered by react. On the other side, props are read-only, so they cannot be modified by the component that is receiving them.
    iv. While state is used by developers to make components interactive, props are used to give the parent component the ability to configure their child components

    Note:
    When the child component receives new updated props, that will actually also cause the component to re-render. If a piece of state in parent component which is passed as props to child component is updated, of course the parent component will be re-rendered. But it makes sense that the child component who basically receives that state as props, should also be re-rendered. So, in conclusion, whenever a piece of state is passed as a prop, when that state updates, both components are re-rendered. So both the components owning the state and the component receiving the state as a prop. This is a very important connection between state and props.