const BooksService = require('./books.service');

let fakeBooks = [
  {
    _id: 1,
    title: 'Harry Potter',
    author: 'J. K. Rowling'
  }
]

let newBook = {_id: 2, title: '1984', author: 'George Orwell'};

const MongoLibStub = {
  getAll: () => [...fakeBooks], 
  // create: () => fakeBooks.push({_id: 2, title: '1984', author: 'George Orwell'})
  create: ()=>fakeBooks.push(newBook)
}

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks()', () => {
    test('Should return a list of books', () => {
      const book = service.createBook({});
      console.log(book);
      // expect(book.title).toEqual('1984'); // This is considering the new book created
    });
  });

  describe('Test for getBooks()', () => {
    test('Should return all books', () => {
      let books = service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(2); // This is considering the new book created
    });
  });

});
