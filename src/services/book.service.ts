import { injectable } from "inversify";
import { BooksApi } from "../apis/books";

@injectable()
class BooksService {
  // @inject("booksPublicApi")
  booksApi: BooksApi;
  constructor() {
    this.booksApi = new BooksApi();
  }

  async getExampleBook() {
    try {
      const data = await this.booksApi.getExampleBook();
      return data;
    } catch (error) {
      console.log("API call failed", error);
    }
  }
}

export { BooksService };
