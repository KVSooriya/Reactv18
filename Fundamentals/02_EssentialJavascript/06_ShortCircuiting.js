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

/* Short Circuiting and Logical Operators: &&, ||, ?? */
const book = getBook(2);
console.log(book);

/* && operator - The and operator short circuits when their first operand is false and then will immediately return that first value. When the
first value is true, the and operator will automatically return the second operand, no matter what that is */
console.log(true && "Some String");
console.log(false && "Some String"); // Here short circuit happens. It doesnt even care about second operand.

/* This also works with so called truthy and falsy values.
   falsy:  0, '', undefined, null
   truthy: any value that is not a falsy value
*/

console.log("sooriya" && "meenakshi"); // Since sooriya is truthy value, it doesnt short circuits.
console.log(0 && "Some String"); // Since 0 is falsy value, here short circuit happens

/* || operator - The or operator works exactly in the opposite way. This one short circuits whenever the first operand is true and then will
   return it. */
console.log(true || "Some String");
console.log(false || "Some String");

// We can use this to our advantage in order to set default values.

/* If the book does not contains spanish translation, then it is undefined which is falsy value and returns the second operand 
which is useful to set the default value. But if the book contains spanish translation, then it is truthy value and short circuits which
will return the first operand.
*/
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(book.translations.spanish);
console.log(spanishTranslation);

/* However, in some scenarios this may go wrong because this works for all falsy values such as 0 as well. Sometimes that can have some
   consequences
*/
console.log(book.reviews.librarything.reviewsCount);

/* Here, we want to get the review count but if there is no value then it should display "no data".  */
const countReview = book.reviews.librarything.reviewsCount || "no data";
console.log(countReview); // It says "no data" but the count is actually 0. Instead of displaying 0, since it is falsy value the second operand here gets evaluated

/* To solve the above issue, JavaScript has recently added a new logical operator which is called the nullish coalescing operator. */
/* ?? - It works very similar to the or operator but it does also short circuit for falsy value. ie. for 0 and "". This will only return the
second value when the first value is null or undefined but not when it is zero or an empty string */

const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);
