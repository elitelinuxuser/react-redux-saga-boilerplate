import { Container } from "inversify";
import { BooksApi } from "../apis/books";
import { APITypes } from "../apis/types";
import { AuthSaga } from "../redux/sagas/auth.saga";
import { BooksSaga } from "../redux/sagas/books.saga";
import { sagaTypes } from "../redux/sagas/types";
import { AuthService } from "../services/auth.service";
import { BooksService } from "../services/book.service";
import { serviceTypes } from "../services/service.types";

const diContainer = new Container();

diContainer.bind<BooksApi>(APITypes.BooksApi).to(BooksApi);
diContainer.bind<BooksService>(serviceTypes.BooksService).to(BooksService);
diContainer.bind<BooksSaga>(sagaTypes.BooksSaga).to(BooksSaga);

diContainer.bind<AuthService>(serviceTypes.AuthService).to(AuthService);
diContainer.bind<AuthSaga>(sagaTypes.AuthSaga).to(AuthSaga);

export { diContainer };
