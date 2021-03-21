import { injectable } from "inversify";
import { BooksPublicApi } from "../apis/books";

@injectable()
class BookService {
  // @inject("booksPublicApi")
  booksPublicApi: BooksPublicApi;
  constructor() {
    this.booksPublicApi = new BooksPublicApi();
  }

  async getExampleBook() {
    try {
      const data = await this.booksPublicApi.getExampleBook();
      return data;
    } catch (error) {
      console.log("API call failed", error);
    }
  }
}

export default BookService;
