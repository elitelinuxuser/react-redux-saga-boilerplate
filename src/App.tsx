import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { BooksService } from "./services/book.service";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
