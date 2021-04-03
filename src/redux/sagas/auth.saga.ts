// import { boundMethod } from "autobind-decorator";
import autobind from "autobind-decorator";
import {
  call,
  CallEffect,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { AuthService } from "../../services/auth.service";
import { login } from "../actions/auth.action";
import { BaseSaga } from "./base.saga";

export class AuthSaga extends BaseSaga {
  private authService: AuthService;
  constructor() {
    super();
    this.authService = new AuthService();
  }

  @autobind
  public *login(
    action: ReturnType<typeof login.invoke>
  ): IterableIterator<CallEffect | PutEffect<any>> {
    try {
      yield put(login.setPending(null));
      const authInfo: any = yield call(this.authService.login, action.payload);
      console.log(authInfo);
      yield put(login.setFulfilled(authInfo));
    } catch (error) {
      yield put(login.setRejected(null, error.toString()));
    }
  }

  protected *registerListeners(): IterableIterator<ForkEffect> {
    yield takeLatest(getType(login.invoke), this.login);
  }
}
