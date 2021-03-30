import * as localforage from "localforage";
import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware, { Task } from "redux-saga";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { persistConfig } from "../config/persist.config";
import { Persistor } from "redux-persist/es/types";

interface IExtendedStore {
  store: Store<Partial<IStore>>;
  persistor: Persistor;
  runSaga: Task;
}

export function configureStore(initialState?: Partial<IStore>): IExtendedStore {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  const isDevEnv = process.env.NODE_ENV === "development";

  if (isDevEnv) {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const composeEnhancers =
    (!isDevEnv &&
      typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })) ||
    compose;

  const persistedReducer = persistReducer(persistConfig, rootReducer(history));

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  const persistor = persistStore(store);

  if (isDevEnv && (module as any).hot) {
    (module as any).hot.accept("./rootReducer", () => {
      store.replaceReducer(require("./rootReducer").default);
    });
  }

  return {
    store,
    persistor,
    runSaga: sagaMiddleware.run(rootSaga),
  };
}

// if (isDevEnv) middlewares = composeWithDevTools(middlewares);
