class Book {
  constructor(id, name, author, sinopse, idiom, isbn, image, date, price) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.sinopse = sinopse;
    this.idiom = idiom;
    this.isbn = isbn;
    this.image = image;
    this.date = date;
    this.price;
  }
  changePric(newPrice) {
    this.price = newPrice;
  }
};
 export default Book;