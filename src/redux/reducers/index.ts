import { CombinedState, combineReducers, Reducer } from "redux";
import { booksReducer } from "./books.reducer";
import { IStore } from "../interfaces";

const rootReducer: Reducer<CombinedState<IStore>> = combineReducers<IStore>({
  books: booksReducer,
});

export default rootReducer;
