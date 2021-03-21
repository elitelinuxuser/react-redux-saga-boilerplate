import { injectable } from "inversify";
import { PublicApi } from "../base/public.api";

import { BOOKS_BASE_URL } from "./constants";

@injectable()
class BooksPublicApi extends PublicApi {
  constructor() {
    super(BOOKS_BASE_URL);
  }

  public getExampleBook() {
    const exampleBookId = "OL7353617M.json";
    return this.instance.get(exampleBookId);
  }
}

export default BooksPublicApi;
