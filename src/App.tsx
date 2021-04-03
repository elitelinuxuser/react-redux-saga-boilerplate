import "./App.less";
import { useEffect } from "react";
import { BooksService } from "./services/book.service";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootRouter from "./routes/root.router";
import { configureStore } from "./redux/configureStore";

const { store, persistor } = configureStore();

function App() {
  useEffect(() => {
    const bookService = new BooksService();
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
