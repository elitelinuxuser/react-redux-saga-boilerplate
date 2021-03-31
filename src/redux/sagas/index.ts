import { all, AllEffect } from "redux-saga/effects";
import { BooksSaga } from "./books.saga";

export default function* rootSaga(): IterableIterator<AllEffect<any>> {
  yield all([new BooksSaga().watch()]);
}
