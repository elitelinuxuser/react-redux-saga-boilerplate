import "./App.less";
import { useEffect } from "react";
import { BooksService } from "./services/book.service";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootRouter from "./routes/root.router";
import { configureStore } from "./redux/configureStore";
import { useInjection } from "./dependency_injection/react-binding";

const { store, persistor } = configureStore();

function App() {
  const bookService = useInjection(BooksService);
  useEffect(() => {
    bookService
      .getExampleBook()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
