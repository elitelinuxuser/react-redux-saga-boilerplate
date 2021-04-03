import { IBooksState } from "../interfaces";
import { IAuthState } from "./IAuthState";

export interface IStore {
  books: IBooksState;
  auth: IAuthState;
}
