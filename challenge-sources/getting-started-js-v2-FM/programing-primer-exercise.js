// 1) define an  `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.
// 2) If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the favoriteBooks array.
// hint:
// stringOne.includes(stringTwo) will return `true` if `anotherString` is found inside `someString`, or `false` if not.
// 3) Definte a `printFavoriteBooks()` function that receives no parameters.
// 4) `printFavoriteBooks()` should first print a message like "Favorite books" and include the number of books in the favoriteBooks array.
// 5) Finally, printFavoriteBooks() should loop through the favoriteBooks array and print out each value.
const favoriteBooks = [];
const addFavoriteBook = function(bookName) {
  if (bookName.includes('Great') === false) {
    favoriteBooks.push(bookName);
  }
}
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
console.log(favoriteBooks);