Extension to download: to run Javascript code without writing/connecting html file
quokka
Once quokka is downloaded, to start the quokka on the file, we need to come to the command palette and type command: quokka start and it will show options, from the option we need to select : Start on current file

1. Destructuring Object and Array
   Destructuring is very useful all the time whenever we need to basically get some data out of an object or out of an array.

   Consider the book object
   {
   id: 2,
   title: 'The Cyberiad',
   publicationDate: '1965-01-01',
   author: 'Stanislaw Lem',
   genres: [
    'science fiction', 'humor', 'speculative fiction', 'short stories', 'fantasy'
   ],
   hasMovieAdaptation: false,
   pages: 295,
   translations: {},
   reviews: {
    goodreads: { rating: 4.16, ratingsCount: 11663, reviewsCount: 812 },
    librarything: { rating: 4.13, ratingsCount: 2434, reviewsCount: 0 }
   }
   } 

  Object Destructuring
  // Without destructuring
  const title = book.title;
  const author = book.author;
  const genres = book.genres;
  console.log(title, author, genres);

  Object destructuring - Instead of manually taking the property out of the object, we are using destructuring. It takes the specified
  property out of the book object. Crucial in object destructuring: the variable names we give inside { } should be same as properties name in the object. This is helpful all the time especially whenever we get some data from an api.

  const { title, author, genres } = book;
  console.log(title, author, genres);

  Array Destructuring
  // Without destructuring
  const primaryGenre = genres[0];
  const secondaryGenre = genres[1];
  console.log(primaryGenre, secondaryGenre);

  Array destructuring - Instead of relying on the property names, it simply relies on the order of the elements in the array

  const [primaryGenre, secondaryGenre] = genres; // First element of the array is assigned to primaryGenre, second element is assigned to secondaryGenre
  console.log(primaryGenre, secondaryGenre);

2. Rest and Spread Operator
   Rest Operator - If we are taking an element out of an array using array destructuring and wanted to place remaining elements into seperate array then we are making use of rest operator (...)
   Note: We can only place the rest operator at the end of destructuring operation

   // ...otherGenres will automatically create an array which contains all the values that we havent previously destructured
   const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
   console.log(primaryGenre, secondaryGenre, otherGenres);

   Spread Operator - same syntax ... is used but spread operator is more common used. Just like destructuring, we can use it both on arrays
   and objects
   1. What if we wanted to create a new array that contains all the genres but add a new one to the end
   // ...genres will basically take all the values out of the array and place them one by one
   const newGenres = [...genres, "epic fantasy"];
   newGenres;

   Spread operator is more important when working with object - because it allows us to add new properties and also to update existing one
   const updateExistingBook = {
   ...book,
   // Adding a new property
   moviePublicationDate: "2001-12-19",
   // Updating an existing property - Very important and used in react when we want to update object in state
   pages: 1210, // If we place this above ...book, this does not gets override because the second pages property will override the first one
   };

3. Template Literals
   Template Literals are an ES6 Javascript feature which allows us to very easily create strings that contain javascript variables, or actually that contains any Javascript expression inside of a string. We can place expression like 2+4, can make a function call and really anything that is an expression ie. anything that immediately produces a value.

   const { title, author, genres, pages, hasMovieAdaptation, publicationDate } = book;
   const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split("-")[0]}`;
   summary;   // The Lord of the Rings, a 1216-page long book, was written by J. R. R. Tolkien and published in 1954

4. Ternaries Instead of if/else statement
   In react, we need to define values based on a condition all the time, and many times in situations where we cannot use an if else statement.
   
   const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
   console.log(`The book has ${pagesRange} pages`);

   The ternary operator can also be used inside template Literal

   console.log(`The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`);

5. Arrow Functions
   Arrow functions are a new way of writing functions that have been introduced into Javascript in ES6 and they are very helpful for writing quick and short one-line functions. This is very useful for callback functions, for eg, in some array methods.

   Instead of writing traditional function
   function getYear(str) {
   return str.split("-")[0];
   }
   console.log(getYear(publicationDate));

   We can write arrow function as below
   const getYear = (str) => str.split("-")[0];
   console.log(getYear(publicationDate));

6. Short Circuiting and Logical Operators
   In Javascript, some logical operators, such as and, or operator have a feature called short circuiting. It means that in certain conditions the operator will immediately return the first value and not even look at the second value.

   && operator - The and operator short circuits when their first operand is false and then will immediately return that first value. When the first value is true, the and operator will automatically return the second operand, no matter what that is
   
   This also works with so called truthy and falsy values.
   falsy:  0, '', undefined, null
   truthy: any value that is not a falsy value

   || operator - The or operator works exactly in the opposite way. This one short circuits whenever the first operand is true and then will return it.

   ?? - It works very similar to the or operator but it does also short circuit for falsy value. ie. for 0 and "". This will only return the second value when the first value is null or undefined but not when it is zero or an empty string

7. Optional Chaining
   If we are trying to read a property for an object that does not exists we will get the error like something below :
   Cannot read properties of undefined (reading 'reviewsCount'). We can make use of Optional chaining (?) which means if the object
   exists then read the property else it too becomes undefined. This is helpful whenever we are not sure that all the values that we
   expect exist in an object.

   function getTotalReviewCount(book) {
   const goodreads = book.reviews?.goodreads?.reviewsCount; // To be in safer side, placing ? near reviews if in case review itself does not exists
   // ie. before reading the property of reviewCount we are checking if book.reviews.librarything exists
   const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // Making use of nullish coalescing operater(??) ie. if the first operand is null/undefined then it returns the second operand
   return goodreads + librarything;
   }

8. The Array map method
   Important three functional array methods in Javascript : map, filter and reduce. These are functional array methods because these methods do not mutate the original array but do instead return a new array based on the original one.

   The map method will loop over an array and return a new array with the same length with some operation applied to each of the elements of the original array. The map method expects a callback function, which is a function that will be called for each of the elements of the array.

   const x = [1, 2, 3, 4, 5].map((el) => el * 2);
   console.log(x);

   // Create an array that contains simply all the titles of all the books
   const bookTitles = books.map((book) => book.title);
   bookTitles;

   To get only the essential data for each of the book object like title, author .. - Earlier we returned only title. This time we want to
   return a new object, which contains the title and the author. In a arrow function, whenever we use curly braces {}, the arrow function
   will think that this is a declaration block. We can solve this by two ways

   1. Using {} as a declaration block and explicitly returning the object
   const essentialData = books.map((book) => {
   return { title: book.title, author: book.author };
   });
   essentialData;

  2. We can use () ie. instead of using {} as declaration block and returning explicitly we can enclose object what we want to return using ()
  const essential = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book), // We can also do some computation/function call inside map
  }));
  essential;

9. The Array filter method
   We can use the filter method in order to filter out some elements of the array based on a condition. Here also we need to pass in a 
   callback function. But instead of returning the value we want in a new array, we need to return a condition which will either be true
   or false. And if the result is true, then the current element will go into the filtered array. But if its false, then it will get
   filtered basically.

   // To create an array which only has books that have more than 500 pages.
   const longBooks = books.filter((book) => book.pages > 500);
   longBooks;

   // We can also chain multiple filters
   const longBooksWithMovie = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);
   longBooksWithMovie;

   // We can also chain filter and map effectively
   const adventureBooks = books.filter((book) => book.genres.includes("adventure")) // The includes method will return either true or false
   .map((book) => book.title);
   adventureBooks;

10.The Array reduce method
   The reduce method is really the most versatile and most powerful of all array methods in Javascript.
   What reduce method does and what its used for : The goal of reduce is to reduce basically the entire array to just one value
   One of the most common useCases: to add numbers together or basically to perform any mathematical operation with numbers.
   The reduce method also takes in a callback function which will be executed for each element of the array. And as a second argument,
   it also takes in a starter value for that final value that we want to obtain. Also, the callback function needs two arguments:
   the current element and the current value of the accumulator.

   // To add pages of all books so that we know how much pages to read for all the books
   const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
   /* 
   (0, book1) => 0 + 1216
   (1216, book2) => 1216 + 295
   (1511, book3) => 1511 + 658
   (2169, book4) => 2169 + 223
   (2392, book5) => 2392 + 835 = 3227
   */
   pagesAllBooks;

11.The Array sort method
   We can use this method to sort an array. And inside sort method, we need to pass a callback function with two arguments.
   Unlike map, filter and reduce method this is not a functional method. This is actually a method that mutates, so it changes the
   original array. However, usually we do not want that to happen, especially in a front-end framework like react. So, a nice trick 
   that we can do is to first take a copy of the array simply by doing slice() and this will then basically return a brand new array.
   And on that array, we can chain the sort method

   const arr1 = [7, 1, 6, 2, 3];
   const sortasc = arr1.sort((a, b) => a - b); // a - b sorts the element in ascending order
   arr1;
   sortasc;

   const arr2 = [7, 1, 6, 2, 3];
   const sortdes = arr2.sort((a, b) => b - a); // b - a sorts the element in descending order
   arr2;
   sortdes;

   // Using slice to prevent mutating the array
   const arr3 = [7, 1, 6, 2, 3];
   const sorted = arr3.slice().sort((a, b) => a - b);
   arr3;
   sorted;

   // Sorting books array by pages - in descending order
   const sortByPages = books.slice().sort((a, b) => b.pages - a.pages);
   sortByPages;

12.Working with Immutable arrays
   In react, many operations need to be immutable, so operations where we do not manipulate the underlying data structure. Therefore, its quite important to know how to add elements to array, how to delete elements and also to update elements all without mutating the original underlying array.

   /* All the below techniques are absolutely essential for react development. We are going to work with array of books. So, an array of 
   objects, is really the most common thing, and the most common data structure when we work with data on the front end.
   */

   // 1) Add a book object to the array
   const newBook = {
   id: 6,
   title: "Harry Potter and the Chamber of Secrets",
   author: "J. K. Rowling",
   };
   const booksAfterAdd = [...books, newBook]; // using spread operator to spread out the array elements and then adding the new object
   booksAfterAdd;

   // 2) Delete book object from array with id of 3
   const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
   booksAfterDelete;

   // 3) Update book object in the array
   const booksAfterUpdate = booksAfterDelete.map((book) =>
   book.id === 1 ? { ...book, pages: 100 } : book
   );
   booksAfterUpdate;

13.Asynchronous Javascript: Promises
   how we can use asynchronous Javascript technique in order to fetch data from an external web API?.
   
   1. The first way in which we are going to do this is to directly use the concept of promises. 
   In order to fetch data from an API in the browsers, we have the so-called fetch API. So a function that is called fetch and into which we can pass a URL of an API.
   fetch("https://jsonplaceholder.typicode.com/todos")
   What is going to happen when fetch function is called? Because fetching the data from the API will take some time. And so, in the meantime, Javascript actually keeps running. If we log something to the console, it will get executed immediately. So, Javascript will not wait until this data is fetched. It will simply execute as function and will then immediately move on to the next line of code. 
   So, how do we basically wait for the code here (fetch code) and do something as soon as the data has arrived? Thats where asynchronous Javascript technique comes into play. So, this fetch function here ( fetch("https://jsonplaceholder.typicode.com/todos") ), what it returns immediately and then moving on to the next line, is a so-called promise. A promise can be in a multiple state: pending, rejected, fulfilled (when data has arrived). The promise state that we are interested in here is the fulfilled state. And we can handle that state by using then method. ie. then method is called as soon as the promise is fulfilled. Into the then method, we need to pass in the callback function which is basically the code that will then be executed as soon as the data has arrived.
   
   fetch("https://jsonplaceholder.typicode.com/todos")
   .then((res) => res.json())   // here, it registers this function to be executed later .. once the promise becomes fulfilled 
   .then((data) => console.log(data)); 

   Converting Json to javascript object also will return another promise for which we need to add another then method

14.Asynchronous Javascript: Async/Await
   Previously handled fetching data from API using promise methods. Same can be done using much cleaner syntax using async/await.

   Instead of doing like above, we need to create an async function ie. simply a function with the async keyword. And inside the async function use the await keyword so that it wont immediately move on to the next line. With the await keyword inside the async function, we do actually have a way of stopping and pausing the code inside a function. But that waiting only works inside the async function. Outside of the async function it starts executing synchronously while the code inside the async function waits for the promise to be fulfilled or return some state.

   async function getTodos() {
   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
   const data = await res.json();
   console.log(data);
   }

   getTodos();



