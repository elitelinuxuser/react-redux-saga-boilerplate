// import { boundMethod } from "autobind-decorator";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { BooksService } from "../../services/book.service";
import { fetchExampleBook } from "../actions/books";
import { BaseSaga } from "./base.saga";

export class BooksSaga extends BaseSaga {
  private booksService: BooksService;
  constructor() {
    super();
    this.booksService = new BooksService();
  }

  public *fetchExampleBook(): IterableIterator<CallEffect | PutEffect<any>> {
    try {
      yield put(fetchExampleBook.setPending(null));
      const book: any = yield call(this.booksService.getExampleBook);
      yield put(fetchExampleBook.setFulfilled(book));
    } catch (error) {
      yield put(fetchExampleBook.setRejected(null, error.toString()));
    }
  }

  protected *registerListeners(): IterableIterator<ForkEffect> {
    yield takeLatest(getType(fetchExampleBook.invoke), this.fetchExampleBook);
  }
}
