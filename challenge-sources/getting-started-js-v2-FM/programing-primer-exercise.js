// 1) define an  `addFavoriteBook(..)` function that receives a single parameter, called `bookName`.
// 2) If the provided `bookName` string does *NOT* have the word "Great" in it, add it to the favoriteBooks array.
// hint:
// stringOne.includes(stringTwo) will return `true` if `anotherString` is found inside `someString`, or `false` if not.
const favoriteBooks = [];
const addFavoriteBook = function(bookName) {
  if (bookName.includes('Great')=== false) {
    favoriteBooks.push(bookName);
  }
}
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
console.log(favoriteBooks);