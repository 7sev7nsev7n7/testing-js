const BooksService = require('./books.service');

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks()', () => {
    test('Should return a list of books', async() => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(1);
    });
  });
});
