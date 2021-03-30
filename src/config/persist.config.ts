import { PersistConfig } from "redux-persist";
import * as localforage from 'localforage';

export const persistConfig: PersistConfig = {
    key: 'root',
    version: 1,
    storage: localforage,
    blacklist: []
}