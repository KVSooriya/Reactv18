const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/* Rest and Spread Operator */
const book = getBook(1);
book;

// Object Destructuring
const { title, author, genres, pages, hasMovieAdaptation, publicationDate } =
  book;
console.log(title, author, genres, pages, hasMovieAdaptation, publicationDate);

/* Array Destructuring
 const [primaryGenre, secondaryGenre] = genres;
 console.log(primaryGenre, secondaryGenre);
*/

/* Rest Operator - What if we wanted to take other genres out of the array .. except primary and secondary if we wanted to take remaining genre
out of the array into a seperate array we can use rest operator.
ie. If we are taking an element out of an array using array destructuring and wanted to place remaining elements into seperate array then we are
making use of rest operator (...)
Note: We can only place the rest operator at the end of destructuring operation
*/

// ...otherGenres will automatically create an array which contains all the values that we havent previously destructured
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

/* Spread Operator - same syntax ... is used but spread operator is more common used. Just like destructuring, we can use it both on arrays
and objects */

/* What if we wanted to create a new array that contains all the genres but add a new one to the end
const newGenres = [genres, "epic fantasy"];
newGenres; // This is not we wanted. It creates a nested array with genres inside a nested array. We can make use of spread operator
*/

// ...genres will basically take all the values out of the array and place them one by one
const newGenres = [...genres, "epic fantasy"];
newGenres;

const modernGenres = ["horror genre", ...genres];
modernGenres;

/* Spread operator is more important when working with object - because it allows us to add new properties and also to update existing one */

// What if we wanted to add a new property to the book object
/* const updatedBook = { book, moviePublicationDate: "2001-12-19" };
updatedBook; // This is not we wanted. Because it creates book as the nested object inside the updatedBook object
*/

// Using spread here will basically take all the properties out of the object and places here one after another
const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
updatedBook;

// We can also use spread operator to update the existing property in objects

/* Here when spread operator is used, all the properties are spread out and there are two pages properties and the second one is
 used to override the first pages property */
const updateExistingBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Updating an existing property - Very important and used in react when we want to update object in state
  pages: 1210, // If we place this above ...book, this does not gets override because the second pages property will override the first one
};
updateExistingBook;
