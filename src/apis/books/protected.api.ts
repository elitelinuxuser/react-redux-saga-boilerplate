import { ProtectedApi } from "../base/protected.api";

import { BOOKS_BASE_URL } from "./constants";

class BooksProtectedApi extends ProtectedApi {
  constructor() {
    super(BOOKS_BASE_URL);
  }
}

export default BooksProtectedApi;
