/* Using asynchronous Javascript technique in order to fetch data from an external web API */

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Some synchronous string");
